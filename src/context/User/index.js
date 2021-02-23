import React, { useContext, useEffect, useState } from 'react';

const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('@user_data');
    setUser(JSON.parse(data));
  }, []);

  const updateUser = (data) => {
    if (data) {
      const _previewsData = localStorage.getItem('@user_data');
      const previewsData = JSON.parse(_previewsData);
      const newData = { ...previewsData, ...data };
      const _newData = JSON.stringify(newData);
      localStorage.setItem('@user_data', _newData);
      setUser(newData);
    } else {
      setUser(null);
      localStorage.clear();
    }
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const userContext = useContext(UserContext);
  return userContext;
};
