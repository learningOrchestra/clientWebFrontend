import React from 'react';

import * as Styles from './styles';

import ProjectIcon from '../../../assets/icons/ProfileIcon';

import { usePopupMenuProjectContext } from '../../../context/PopupMenuProject';

const Project = ({ project }) => {
  const { handleOnProjectClick } = usePopupMenuProjectContext();
  return (
    <Styles.Project className="rounded border bg-white" onContextMenu={(event) => handleOnProjectClick(event, project)}>
      <ProjectIcon />
      {project.name}
    </Styles.Project>
  );
};

export default Project;
