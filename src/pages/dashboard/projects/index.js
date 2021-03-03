import React from 'react';

import ProjectsIcon from '../../../assets/icons/ProjectsIcon';

import Dashboard from '../../../components/Dashboard';
import Projects from '../../../components/Projects';

const MyProjects = () => {
  const breadcrumb = [{ name: 'Meus Projetos', url: null }];
  return (
    <Dashboard breadcrumb={breadcrumb} Icon={ProjectsIcon}>
      <Projects />
    </Dashboard>
  );
};

export default MyProjects;
