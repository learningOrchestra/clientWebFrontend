/* eslint-disable no-new */
import React, { useContext, useState } from 'react';

import Toast from '../../components/Toast';

const ToastContext = React.createContext();

export const ToastContextProvider = ({ children }) => {
  const [options, setOptions] = useState({});

  const show = (_options) => {
    const element = document.getElementById('toast-bottom-right');
    // eslint-disable-next-line no-undef
    const toast = new bootstrap.Toast(element);
    setOptions(_options);
    toast.show();
  };

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <Toast options={options} />
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const toastContext = useContext(ToastContext);
  return toastContext;
};
