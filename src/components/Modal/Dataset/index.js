import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Formik } from 'formik';

import { useToastContext } from '../../../context/Toast';
import { useFilesContext } from '../../../context/Files';

const Modal = ({ modalRef, dataset = {} }) => {
  const router = useRouter();

  const toast = useToastContext();
  const { handleAddFile } = useFilesContext();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById('dataset-modal-name-input');
      element.focus();
    }, 300);
  }, [dataset]);

  const handleCloseModal = (form) => {
    form.resetForm();
    modalRef.hide();
  };

  const handleOnSubmit = async (event, form) => {
    event.preventDefault();
    const { _id } = router.query;
    if (!_id) return;
    setIsLoading(true);
    const { values: { name, url } } = form;
    const data = { url };
    try {
      handleAddFile(name, 'db', data, _id);
      const options = {
        title: 'Projeto carregado',
        message: `O projeto <b>${name}</b> foi carregado, assim que ele estiver pronto para ser usado, você será avisado.`,
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
    <Formik initialValues={{ name: '', url: '' }} enableReinitialize>
      {(form) => (
        <div
          id="dataset-modal"
          className="modal fade"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Carregar dataset
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
                      id="dataset-modal-name-input"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Digite o nome do dataset"
                      value={form.values.name}
                      onChange={form.handleChange}
                      disabled={isLoading}
                      required
                    />
                    <label>Nome do projeto</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="url"
                      className="form-control"
                      placeholder="Digite a URL do dataset"
                      value={form.values.url}
                      onChange={form.handleChange}
                      disabled={isLoading}
                      required
                    />
                    <label>URL do dataset</label>
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
                      : 'Carregar'}
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
