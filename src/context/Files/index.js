import React, { useContext, useEffect, useState } from 'react';

import {
  GET, POST, PUT, DELETE,
} from '../../api';

const FilesContext = React.createContext();

export const FilesContextProvider = ({ children }) => {
  const [files, setFiles] = useState([]);

  const handleGetFiles = async (_id) => {
    const userData = localStorage.getItem('@user_data');
    const user = (JSON.parse(userData));
    if (!user?.token) return;
    try {
      const params = { _id };
      const { data } = await GET('/api/files', params, user?.token);
      console.log(data);
      // setFiles(data?.projects ?? []);
    } catch (error) {
      // setFiles([]);
    }
  };

  const handleAddFile = async (_id) => {
    const userData = localStorage.getItem('@user_data');
    const user = (JSON.parse(userData));
    if (!user?.token) return;

    // const data = {
    //   name, color, paths, createdBy: user?.data?.id,
    // };
    // await POST('/api/projects', data, user?.token);
    await handleGetFiles(_id);
  };

  const handleUpdateFile = async (_id) => {
    const userData = localStorage.getItem('@user_data');
    const user = (JSON.parse(userData));
    if (!user?.token) return;

    // const params = { _id };
    // const data = { name, color };
    // await PUT('/api/projects', params, data, user?.token);
    await handleGetFiles(_id);
  };

  const handleDeleteFile = async (_id) => {
    const userData = localStorage.getItem('@user_data');
    const user = (JSON.parse(userData));
    if (!user?.token) return;

    // const params = { _id };
    // await DELETE('/api/projects', params, user?.token);
    await handleGetFiles(_id);
  };

  return (
    <FilesContext.Provider
      value={{
        files,
        handleGetFiles,
        handleAddFile,
        handleUpdateFile,
        handleDeleteFile,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};

export const useFilesContext = () => {
  const filesContext = useContext(FilesContext);
  return filesContext;
};
