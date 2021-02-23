import React, { useContext, useEffect, useState } from 'react';

import { GET } from '../../api';

const ProjectsContext = React.createContext();

export const ProjectsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const userData = localStorage.getItem('@user_data');
      const user = (JSON.parse(userData));
      if (!user?.token) return false;
      try {
        const params = { uid: user?.data?.id };
        const { data } = await GET('/api/projects', params, user?.token);
        setProjects(data?.projects ?? []);
      } catch (error) {
        setProjects([]);
      }
    })();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  const projectsContext = useContext(ProjectsContext);
  return projectsContext;
};
