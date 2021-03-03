import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';

import ColorPicker from '../../ColorPicker';

import { useProjectsContext } from '../../../context/Projects';
import { useToastContext } from '../../../context/Toast';

const Modal = ({ modalRef, project = {} }) => {
  const toast = useToastContext();
  const { handleAddProject, handleUpdateProject } = useProjectsContext();

  const [color, setColor] = useState(project?.color ?? '#ABB8C3');
  const [isEdit, setIsEdit] = useState(!!project?._id);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setColor(project?.color ?? '#ABB8C3');
    setIsEdit(!!project?._id);

    setTimeout(() => {
      const element = document.getElementById('project-modal-name-input');
      element.focus();
    }, 300);
  }, [project]);

  const handleOnColorChange = (_color) => setColor(_color);

  const handleCloseModal = (form) => {
    setColor('#ABB8C3');
    form.resetForm();
    modalRef.hide();
  };

  const handleOnSubmit = async (event, form) => {
    event.preventDefault();
    const { values: { name } } = form;
    const paths = [{ _id: '', name: '', index: 0 }];
    setIsLoading(true);
    try {
      if (isEdit) await handleUpdateProject(project?._id, name, color);
      else await handleAddProject(name, color, paths);
      const options = {
        title: `Projeto ${isEdit ? 'editado' : 'criado'}`,
        message: `O projeto <b>${name}</b> foi ${isEdit ? 'editado' : 'criado'} e está pronto para ser usado.`,
        type: 'success',
      };
      toast.show(options);
      handleCloseModal(form);
    } catch (error) {
      const options = {
        title: 'Algo não ocorreu como esperado',
        message: 'Verifique se está tudo certo e tente novamente.',
        type: 'error',
      };
      toast.show(options);
    }
    setIsLoading(false);
  };

  return (
    <Formik initialValues={{ name: project?.name ?? '' }} enableReinitialize>
      {(form) => (
        <div
          id="project-modal"
          className="modal fade"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {`${isEdit ? 'Editar' : 'Novo'} projeto`}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => handleCloseModal(form)}
                  aria-label="Close"
                  disabled={isLoading}
                />
              </div>

              <form onSubmit={(event) => handleOnSubmit(event, form)}>
                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <input
                      id="project-modal-name-input"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Digite o nome do projeto"
                      value={form.values.name}
                      onChange={form.handleChange}
                      disabled={isLoading}
                      required
                    />
                    <label>Nome do projeto</label>
                  </div>
                  <div className="mb-0">
                    <ColorPicker
                      color={color}
                      onChange={handleOnColorChange}
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleCloseModal(form)}
                    disabled={isLoading}
                    style={{ minWidth: 90 }}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isLoading}
                    style={{ minWidth: 90 }}
                  >
                    {isLoading
                      ? <div className="spinner-border spinner-border-sm" role="status" />
                      : isEdit ? 'Editar' : 'Criar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Modal;
