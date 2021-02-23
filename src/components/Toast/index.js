import React, { useEffect, useMemo, useState } from 'react';

import * as Styles from './styles';

const types = {
  alert: 'warning',
  error: 'danger',
  success: 'success',
};

const Toast = ({ title, message, type }) => {
  const [currentType, setCurrentType] = useState();

  useEffect(() => {
    const _currentType = types[type];
    setCurrentType(_currentType ?? 'light');
  }, [type]);

  const memoIsLight = useMemo(() => currentType !== 'light', [currentType]);

  return (
    <Styles.Toast>
      <div id="toast-bottom-right" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div className={`toast-header bg-${currentType}`}>
          <strong className={`me-auto ${memoIsLight ? 'text-light' : ''}`}>{title}</strong>
          <button
            type="button"
            className={`btn-close ${memoIsLight ? 'btn-close-white' : ''}`}
            data-bs-dismiss="toast"
            aria-label="Close"
          />
        </div>
        <div className="toast-body" dangerouslySetInnerHTML={{ __html: message }} />
      </div>
    </Styles.Toast>
  );
};

export default Toast;
