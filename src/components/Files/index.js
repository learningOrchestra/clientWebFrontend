import React from 'react';

import * as Styles from './styles';

import File from './File';

const Files = ({ project }) => (
  <Styles.Container>
    {project?.files?.map?.((file, index) => <File key={index} file={file} />)}
  </Styles.Container>
);

export default Files;
