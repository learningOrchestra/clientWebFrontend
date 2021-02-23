import React from 'react';

import ProjectsIcon from '../../../assets/icons/ProjectsIcon';

import Dashboard from '../../../components/Dashboard';
import Projects from '../../../components/Projects';

const MyProjects = () => (
  <Dashboard title="Meus Projetos" Icon={ProjectsIcon}>
    <Projects />
  </Dashboard>
);

export default MyProjects;
