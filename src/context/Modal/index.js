/* eslint-disable no-new */
import React, { useContext, useEffect, useState } from 'react';

import Alert from '../../components/Modal/Alert';
import ProjectModal from '../../components/Modal/Project';

const ModalContext = React.createContext();

export const ModalContextProvider = ({ children }) => {
  const [options, setOptions] = useState({});
  const [AlertRef, setAlertRef] = useState(null);
  const [ProjectModalRef, setProjectModalRef] = useState(null);
  const [projectModalData, setProjectModalData] = useState({});

  useEffect(() => {
    const _options = { backdrop: 'static', keyboard: false };
    const alertRefElement = document.getElementById('alert-modal');
    // eslint-disable-next-line no-undef
    const alertRefInstance = new bootstrap.Modal(alertRefElement, _options);
    setAlertRef(alertRefInstance);

    const projectModalElement = document.getElementById('project-modal');
    // eslint-disable-next-line no-undef
    const projectModalInstance = new bootstrap.Modal(projectModalElement, _options);
    setProjectModalRef(projectModalInstance);
  }, []);

  const handleShowAlert = (_options) => {
    setOptions(_options);
    AlertRef.show();
  };

  const handleShowAddProjectModal = () => {
    setProjectModalData({});
    ProjectModalRef.show();
  };
  const handleShowEditProjectModal = (project) => {
    setProjectModalData(project);
    ProjectModalRef.show();
  };

  return (
    <ModalContext.Provider
      value={{
        handleShowAlert,
        handleShowAddProjectModal,
        handleShowEditProjectModal,
      }}
    >
      {children}
      <Alert options={options} />
      <ProjectModal modalRef={ProjectModalRef} project={projectModalData} />
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  return modalContext;
};
