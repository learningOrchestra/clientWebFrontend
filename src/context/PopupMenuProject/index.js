import React, { useContext, useState } from 'react';

import * as Styles from './styles';

import TrashIcon from '../../assets/icons/TrashIcon';
import DownloadIcon from '../../assets/icons/DownloadIcon';
import EditIcon from '../../assets/icons/EditIcon';
import ShareIcon from '../../assets/icons/ShareIcon';

import { useModalContext } from '../Modal';
import { useProjectsContext } from '../Projects';

const PopupMenuProjectContext = React.createContext();

export const PopupMenuProjectContextProvider = ({ children }) => {
  const { handleShowAlert, handleShowEditProjectModal } = useModalContext();
  const { handleDeleteProject } = useProjectsContext();

  const [clientClick, setClientClick] = useState({ clientX: 0, clientY: 0 });
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const closePopupMenu = () => {
    setIsPopupMenuOpen(false);
    const body = document.querySelector('body');
    body.removeEventListener('click', closePopupMenu);
  };

  const handleOnProjectClick = (event, project) => {
    event.preventDefault();
    setCurrentProject(project);
    const { clientX, clientY } = event;
    setClientClick({ clientX, clientY });
    setIsPopupMenuOpen((value) => !value);

    const body = document.querySelector('body');
    body.addEventListener('click', closePopupMenu);
  };

  const _handleEditProject = () => handleShowEditProjectModal(currentProject);
  const _handleShareProject = () => console.log(currentProject);
  const _handleDownloadProject = () => console.log(currentProject);
  const _handleDeleteProject = () => {
    const options = {
      title: 'Deletar',
      message: `Você deseja deletar <b>${currentProject?.name}</b>?`,
      cancelText: 'Cancelar',
      confirmText: 'Deletar',
      confirmColor: 'danger',
      onClickConfirm: () => handleDeleteProject(currentProject?._id),
    };
    handleShowAlert(options);
  };

  return (
    <PopupMenuProjectContext.Provider value={{ handleOnProjectClick }}>
      {isPopupMenuOpen && (
        <Styles.PopupMenu className="shadow rounded list-group list-group-flush bg-white" clientClick={clientClick}>
          <li
            className="list-group-item list-group-item-action"
            onClick={_handleEditProject}
            aria-hidden="true"
          >
            <EditIcon />
            Editar
          </li>
          <li
            className="list-group-item list-group-item-action"
            onClick={_handleShareProject}
            aria-hidden="true"
          >
            <ShareIcon />
            Compartilhar
          </li>
          <li
            className="list-group-item list-group-item-action"
            onClick={_handleDownloadProject}
            aria-hidden="true"
          >
            <DownloadIcon />
            Download
          </li>
          <li
            className="list-group-item list-group-item-action"
            onClick={_handleDeleteProject}
            aria-hidden="true"
          >
            <TrashIcon />
            Deletar
          </li>
        </Styles.PopupMenu>
      )}
      {children}
    </PopupMenuProjectContext.Provider>
  );
};

export const usePopupMenuProjectContext = () => {
  const popupMenuProjectContext = useContext(PopupMenuProjectContext);
  return popupMenuProjectContext;
};
