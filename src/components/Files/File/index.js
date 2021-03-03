import React from 'react';
import { useRouter } from 'next/router';

import * as Styles from './styles';

import ProjectIcon from '../../../assets/icons/ProjectIcon';

import { usePopupMenuProjectContext } from '../../../context/PopupMenuProject';

const File = ({ file }) => {
  // const router = useRouter();
  // const { handleOnProjectClick } = usePopupMenuProjectContext();

  // const handleOnDoubleClick = () => router.push(`/dashboard/projects/${file._id}`);
  console.log(file);
  return (
    <Styles.Folder
      className="rounded border bg-white"
      // onContextMenu={(event) => handleOnProjectClick(event, project)}
      // onDoubleClick={handleOnDoubleClick}
    >
      <Styles.Body>
        <ProjectIcon color={file.color} />
      </Styles.Body>
      <Styles.Name className="border-top p-1">
        <ProjectIcon color={file.color} />
        <p className="p-0 m-0">{file.name}</p>
      </Styles.Name>
    </Styles.Folder>
  );
};

export default File;
