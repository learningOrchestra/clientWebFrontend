import React from 'react';
import { useRouter } from 'next/router';

import * as Styles from './styles';

import DatasetIcon from '../../../assets/icons/DatasetIcon';

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
        <DatasetIcon color="orange" />
      </Styles.Body>
      <Styles.Name className="border-top p-1">
        <DatasetIcon color="orange" />
        <p className="p-0 m-0">{`${file.name}.${file.type}`}</p>
      </Styles.Name>
    </Styles.Folder>
  );
};

export default File;
