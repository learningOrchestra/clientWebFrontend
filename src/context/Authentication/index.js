import React, { useContext } from 'react';

import { POST } from '../../api';
import { useUserContext } from '../User';

const AuthenticationContext = React.createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const { updateUser } = useUserContext();

  const signIn = async (email, password) => {
    const data = { email, password };
    const { data: { token } } = await POST('api/auth/signin', data);
    updateUser({ token });
  };

  const signUp = async (name, email, password) => {
    const data = { name, email, password };
    const { data: { token } } = await POST('api/auth/signup', data);
    updateUser({ token });
  };

  return (
    <AuthenticationContext.Provider value={{ signIn, signUp }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext = () => {
  const authenticationContext = useContext(AuthenticationContext);
  return authenticationContext;
};
