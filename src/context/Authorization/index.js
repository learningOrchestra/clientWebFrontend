import React, { useContext } from 'react';

import { GET } from '../../api';
import { useUserContext } from '../User';

const AuthorizationContext = React.createContext();

export const AuthorizationContextProvider = ({ children }) => {
  const { updateUser } = useUserContext();

  const verify = async () => {
    const userData = localStorage.getItem('@user_data');
    const user = (JSON.parse(userData));
    if (!user?.token) return false;
    try {
      const { data } = await GET('/api/auth/session', null, user?.token);
      updateUser(data);
      return true;
    } catch (error) {
      updateUser(null);
      return false;
    }
  };

  return (
    <AuthorizationContext.Provider value={{ verify }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuthorizationContext = () => {
  const authorizationContext = useContext(AuthorizationContext);
  return authorizationContext;
};
