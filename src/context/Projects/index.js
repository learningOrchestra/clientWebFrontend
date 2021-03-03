import React, { useContext, useEffect, useState } from 'react';

import {
  GET, POST, PUT, DELETE,
} from '../../api';

const ProjectsContext = React.createContext();

export const ProjectsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [projectData, setProjectData] = useState({});

  const handleGetOwnProjects = async () => {
    const userData = localStorage.getItem('@user_data');
    const user = (JSON.parse(userData));
    if (!user?.token) return;
    try {
      const params = { createdBy: user?.data?.id };
      const { data } = await GET('/api/projects', params, user?.token);
      setProjects(data?.projects ?? []);
    } catch (error) {
      setProjects([]);
    }
  };

  useEffect(() => { (async () => { await handleGetOwnProjects(); })(); }, []);

  const handleGetProjectData = async (_id) => {
    const userData = localStorage.getItem('@user_data');
    const user = (JSON.parse(userData));
    if (!user?.token) return;

    const params = { _id };
    const { data } = await GET('/api/projects', params, user?.token);
    if (data?.projects?.length === 0) setProjectData({});
    else setProjectData(data?.projects[0]);
  };

  const handleAddProject = async (name, color, paths) => {
    const userData = localStorage.getItem('@user_data');
    const user = (JSON.parse(userData));
    if (!user?.token) return;

    const data = {
      name, color, paths, createdBy: user?.data?.id,
    };
    await POST('/api/projects', data, user?.token);
    await handleGetOwnProjects();
  };

  const handleUpdateProject = async (_id, name, color) => {
    const userData = localStorage.getItem('@user_data');
    const user = (JSON.parse(userData));
    if (!user?.token) return;

    const params = { _id };
    const data = { name, color };
    await PUT('/api/projects', params, data, user?.token);
    await handleGetOwnProjects();
  };

  const handleDeleteProject = async (_id) => {
    const userData = localStorage.getItem('@user_data');
    const user = (JSON.parse(userData));
    if (!user?.token) return;

    const params = { _id };
    await DELETE('/api/projects', params, user?.token);
    await handleGetOwnProjects();
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        projectData,
        handleGetOwnProjects,
        handleGetProjectData,
        handleAddProject,
        handleUpdateProject,
        handleDeleteProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  const projectsContext = useContext(ProjectsContext);
  return projectsContext;
};
