import React from 'react';

import * as Styles from './styles';

import Project from './Project';

import { useProjectsContext } from '../../context/Projects';

const Projects = () => {
  const { projects } = useProjectsContext();

  return (
    <Styles.Container>
      {projects.map((project, index) => <Project key={index} project={project} />)}
    </Styles.Container>
  );
};

export default Projects;
