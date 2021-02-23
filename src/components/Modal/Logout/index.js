import React from 'react';
import { useRouter } from 'next/router';

import { useUserContext } from '../../../context/User';

const Modal = () => {
  const router = useRouter();

  const { updateUser } = useUserContext();

  const handleLogout = (event) => {
    event.preventDefault();
    updateUser(null);
    router.push('/login');
  };

  return (
    <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="logoutModalLabel">Sair</h5>
          </div>
          <div className="modal-body">
            Você deseja sair da aplicação?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ minWidth: 90 }}>Cancelar</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" style={{ minWidth: 90 }} onClick={handleLogout}>Sair</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
