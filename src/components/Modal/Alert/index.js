import React from 'react';

const Modal = ({ options }) => (
  <div
    id="alert-modal"
    className="modal fade"
    tabIndex="-1"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            {options?.title ?? 'Title'}
          </h5>
        </div>
        <div
          className="modal-body"
          dangerouslySetInnerHTML={{ __html: options?.message ?? 'Message' }}
        />
        <div className="modal-footer">
          <button
            type="button"
            className={`btn btn-${options?.cancelColor ?? 'secondary'}`}
            data-bs-dismiss="modal"
            onClick={options?.onClickCancel}
            style={{ minWidth: 90 }}
          >
            {options?.cancelText ?? 'Cancel'}
          </button>
          <button
            type="button"
            className={`btn btn-${options?.confirmColor ?? 'primary'}`}
            data-bs-dismiss="modal"
            onClick={options?.onClickConfirm}
            style={{ minWidth: 90 }}
          >
            {options?.confirmText ?? 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
