import React, { useContext, useState } from 'react';

import * as Styles from './styles';

import TrashIcon from '../../assets/icons/TrashIcon';
import DownloadIcon from '../../assets/icons/DownloadIcon';
import EditIcon from '../../assets/icons/EditIcon';
import ShareIcon from '../../assets/icons/ShareIcon';

const PopupMenuProjectContext = React.createContext();

export const PopupMenuProjectContextProvider = ({ children }) => {
  const [clientClick, setClientClick] = useState({ clientX: 0, clientY: 0 });
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);

  const closePopupMenu = () => {
    setIsPopupMenuOpen(false);
    const body = document.querySelector('body');
    body.removeEventListener('click', closePopupMenu);
  };

  const handleOnProjectClick = (event, project) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    setClientClick({ clientX, clientY });
    setIsPopupMenuOpen((value) => !value);

    const body = document.querySelector('body');
    body.addEventListener('click', closePopupMenu);
  };

  return (
    <PopupMenuProjectContext.Provider value={{ handleOnProjectClick }}>
      {isPopupMenuOpen && (
        <Styles.PopupMenu className="shadow rounded list-group list-group-flush bg-white" clientClick={clientClick}>
          <li className="list-group-item list-group-item-action">
            <EditIcon />
            Editar
          </li>
          <li className="list-group-item list-group-item-action">
            <ShareIcon />
            Compartilhar
          </li>
          <li className="list-group-item list-group-item-action">
            <DownloadIcon />
            Download
          </li>
          <li className="list-group-item list-group-item-action">
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
