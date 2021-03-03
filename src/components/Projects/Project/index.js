import React from 'react';
import { useRouter } from 'next/router';

import * as Styles from './styles';

import ProjectIcon from '../../../assets/icons/ProjectIcon';

import { usePopupMenuProjectContext } from '../../../context/PopupMenuProject';

const Project = ({ project }) => {
  const router = useRouter();
  const { handleOnProjectClick } = usePopupMenuProjectContext();

  const handleOnDoubleClick = () => router.push(`/dashboard/projects/${project._id}`);
  return (
    <Styles.Project
      className="rounded border bg-white"
      onContextMenu={(event) => handleOnProjectClick(event, project)}
      onDoubleClick={handleOnDoubleClick}
    >
      <Styles.Name>
        <ProjectIcon color={project.color} />
        <p className="p-0 m-0">{project.name}</p>
      </Styles.Name>
    </Styles.Project>
  );
};

export default Project;
