/* eslint-disable no-undef */
/* eslint-disable no-new */
import React, { useContext, useEffect, useState } from 'react';

import Alert from '../../components/Modal/Alert';
import ProjectModal from '../../components/Modal/Project';
import DatasetModal from '../../components/Modal/Dataset';

const ModalContext = React.createContext();

export const ModalContextProvider = ({ children }) => {
  const [options, setOptions] = useState({});
  const [AlertRef, setAlertRef] = useState(null);
  const [ProjectModalRef, setProjectModalRef] = useState(null);
  const [projectModalData, setProjectModalData] = useState({});
  const [DatasetModalRef, setDatasetModalRef] = useState(null);
  const [datasetModalData, setDatasetModalData] = useState({});

  useEffect(() => {
    const _options = { backdrop: 'static', keyboard: false };

    const alertRefElement = document.getElementById('alert-modal');
    const alertRefInstance = new bootstrap.Modal(alertRefElement, _options);
    setAlertRef(alertRefInstance);

    const projectModalElement = document.getElementById('project-modal');
    const projectModalInstance = new bootstrap.Modal(projectModalElement, _options);
    setProjectModalRef(projectModalInstance);

    const datasetModalElement = document.getElementById('dataset-modal');
    const datasetModalInstance = new bootstrap.Modal(datasetModalElement, _options);
    setDatasetModalRef(datasetModalInstance);
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

  const handleShowAddDatasetModal = () => {
    setDatasetModalData({});
    DatasetModalRef.show();
  };
  const handleShowEditDatasetModal = (dataset) => {
    setDatasetModalData(dataset);
    DatasetModalRef.show();
  };

  return (
    <ModalContext.Provider
      value={{
        handleShowAlert,
        handleShowAddProjectModal,
        handleShowEditProjectModal,
        handleShowAddDatasetModal,
        handleShowEditDatasetModal,
      }}
    >
      {children}
      <Alert options={options} />
      <ProjectModal modalRef={ProjectModalRef} project={projectModalData} />
      <DatasetModal modalRef={DatasetModalRef} dataset={datasetModalData} />
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  return modalContext;
};
