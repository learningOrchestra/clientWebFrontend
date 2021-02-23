import React from 'react';

import * as Styles from './styles';

import { useToggleSidebarContext } from '../../../context/ToggleSidebar';

const ControlBar = () => {
  const { handleToggleSidebar } = useToggleSidebarContext();

  return (
    <Styles.ControlBar>

      <Styles.Control>
        <div className="item-svg" onClick={handleToggleSidebar} aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
        <button type="button" className="btn btn-primary">Novo projeto</button>
      </Styles.Control>

    </Styles.ControlBar>
  );
};

export default ControlBar;
