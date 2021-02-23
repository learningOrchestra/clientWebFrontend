/* eslint-disable no-new */
import React, { useContext, useState } from 'react';

import Toast from '../../components/Toast';

const ToastContext = React.createContext();

export const ToastContextProvider = ({ children }) => {
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const show = (_title, _message, _type) => {
    const element = document.getElementById('toast-bottom-right');
    // eslint-disable-next-line no-undef
    const toast = new bootstrap.Toast(element);

    setTitle(_title);
    setMessage(_message);
    setType(_type);

    toast.show();
  };

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <Toast title={title} message={message} type={type} />
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const toastContext = useContext(ToastContext);
  return toastContext;
};
