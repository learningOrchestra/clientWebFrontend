import React, { useEffect, useMemo, useState } from 'react';

import * as Styles from './styles';

const types = {
  alert: 'warning',
  error: 'danger',
  success: 'success',
};

const Toast = ({ options }) => {
  const [currentType, setCurrentType] = useState();

  useEffect(() => {
    const _currentType = types[options?.type ?? 'light'];
    setCurrentType(_currentType ?? 'light');
  }, [options]);

  const memoIsLight = useMemo(() => currentType !== 'light', [currentType]);

  return (
    <Styles.Toast>
      <div id="toast-bottom-right" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div className={`toast-header bg-${currentType}`}>
          <strong className={`me-auto ${memoIsLight ? 'text-light' : ''}`}>{options?.title ?? 'Title'}</strong>
          <button
            type="button"
            className={`btn-close ${memoIsLight ? 'btn-close-white' : ''}`}
            data-bs-dismiss="toast"
            aria-label="Close"
          />
        </div>
        <div
          className="toast-body"
          dangerouslySetInnerHTML={{ __html: options?.message ?? 'Message' }}
        />
      </div>
    </Styles.Toast>
  );
};

export default Toast;
