import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import * as Styles from './styles';

import { useToggleSidebarContext } from '../../../context/ToggleSidebar';
import { useModalContext } from '../../../context/Modal';

const ControlBar = () => {
  const { pathname } = useRouter();

  const { handleToggleSidebar } = useToggleSidebarContext();
  const { handleShowAddProjectModal, handleShowAddDatasetModal } = useModalContext();

  const [currentPath, setCurrentPath] = useState('OTHER');

  useEffect(() => {
    const paths = {
      '/dashboard/projects': 'PROJECTS',
      '/dashboard/projects/[_id]': 'PROJECTS_ID',
    };
    setCurrentPath(paths[pathname] ?? 'OTHER');
  }, [pathname]);

  const handleNewProject = () => handleShowAddProjectModal();
  const handleNewWorkflow = () => console.log('Workflow');
  const handleNewDataset = () => handleShowAddDatasetModal();

  return (
    <Styles.ControlBar>

      <Styles.Control onClick={handleToggleSidebar} aria-hidden="true">
        <div className="item-svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
      </Styles.Control>

      {(() => {
        switch (currentPath) {
          case 'PROJECTS':
            return (
              <Styles.Control className="ms-3 pe-3" onClick={handleNewProject} aria-hidden="true">
                <div className="item-svg">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.36199 4.97633C4.01813 5.17345 2.96589 6.18334 2.66909 7.56101C2.58971 7.92928 2.58971 20.0708 2.66909 20.439C2.93957 21.6944 3.79896 22.6107 5.02599 22.9521L5.30599 23.03H14H22.694L22.974 22.9521C24.201 22.6107 25.0604 21.6944 25.3309 20.439C25.3965 20.1348 25.4115 10.3476 25.3469 9.97629C25.1463 8.82185 24.3616 7.87993 23.268 7.48072C22.7345 7.28598 23.0108 7.29914 19.0873 7.28171L15.5366 7.26603L14.4533 6.18488C13.7558 5.48866 13.3251 5.07993 13.244 5.03688L13.118 4.97003L9.28199 4.96702C7.17219 4.96541 5.40819 4.96961 5.36199 4.97633ZM13.5391 7.80853C14.2458 8.51364 14.6744 8.92041 14.756 8.96353L14.882 9.03003L18.648 9.04438L22.414 9.05866L22.6002 9.12159C23.0722 9.28119 23.4382 9.67095 23.566 10.15C23.6137 10.3292 23.6212 19.9533 23.5738 20.1593C23.4695 20.6117 23.0955 21.0278 22.6358 21.2029L22.47 21.266L14.1047 21.2734C4.95242 21.2814 5.53069 21.2912 5.18062 21.1213C4.85127 20.9615 4.51114 20.5277 4.42623 20.1593C4.38612 19.9852 4.38612 8.01482 4.42623 7.8408C4.51128 7.47176 4.85127 7.03853 5.18167 6.87823C5.50563 6.72101 5.41407 6.72465 9.07311 6.72227L12.4482 6.72003L13.5391 7.80853ZM13.7013 10.8301C13.4499 10.92 13.3063 11.0582 13.1799 11.3318C13.119 11.4639 13.1179 11.4889 13.1096 12.872L13.1011 14.2781L11.6816 14.286L10.262 14.294L10.1029 14.3721C9.46413 14.6858 9.45888 15.6175 10.094 15.9555L10.234 16.03L11.6678 16.038L13.1015 16.046L13.1098 17.452L13.118 18.858L13.1965 19.026C13.5264 19.7319 14.4756 19.7244 14.8092 19.0133L14.882 18.858L14.8902 17.452L14.8984 16.046L16.3322 16.038L17.766 16.03L17.9085 15.9548C18.5394 15.6219 18.5326 14.6842 17.8971 14.3721L17.738 14.294L16.3184 14.286L14.8989 14.2781L14.8904 12.872L14.882 11.466L14.8092 11.3108C14.606 10.8775 14.1375 10.6743 13.7013 10.8301Z" fill="#407439" />
                  </svg>
                </div>
                Novo projeto
              </Styles.Control>
            );
          case 'PROJECTS_ID':
            return (
              <>
                <Styles.Control className="ms-3 px-2" onClick={handleNewWorkflow} aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.85001 4.38808C9.65641 4.43593 9.50061 4.56583 9.41596 4.74998L9.37001 4.84998L9.36451 7.10498L9.35901 9.35998H7.17051C4.63201 9.35998 4.75031 9.35083 4.54716 9.56333C4.23786 9.88698 4.34831 10.4187 4.75951 10.5852L4.87001 10.63L7.11501 10.6354L9.36001 10.6408V12.8294C9.36001 14.3723 9.36666 15.0493 9.38246 15.124C9.52451 15.7941 10.4755 15.7941 10.6176 15.124C10.6334 15.0493 10.64 14.3723 10.64 12.8294V10.6408L12.885 10.6354L15.13 10.63L15.2405 10.5852C15.6604 10.4152 15.7654 9.85123 15.434 9.54578C15.2223 9.35063 15.3534 9.35998 12.829 9.35998H10.64V7.17098C10.64 5.62778 10.6334 4.95068 10.6176 4.87598C10.5412 4.51548 10.2034 4.30078 9.85001 4.38808Z" fill="#407439" />
                  </svg>
                  <div className="mx-2">Novo workflow</div>
                </Styles.Control>

                <Styles.Control className="px-2" onClick={handleNewDataset} aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4534 4.40451C13.2573 4.46862 13.1868 4.53548 10.9627 6.76496C8.82959 8.90321 8.74666 8.98989 8.6921 9.13767C8.49078 9.68291 8.86416 10.2371 9.43272 10.2371C9.80188 10.2371 9.70342 10.3177 11.3811 8.64299L12.8822 7.14451L12.8889 12.6411L12.8956 18.1376L12.9673 18.291C13.2684 18.9356 14.1348 18.9288 14.4392 18.2794L14.5056 18.1376L14.5123 12.6411L14.519 7.14451L16.0202 8.64299C17.6978 10.3177 17.5994 10.2371 17.9685 10.2371C18.5371 10.2371 18.9104 9.68291 18.7091 9.13767C18.6343 8.93505 14.3092 4.57492 14.0628 4.45379C13.8985 4.373 13.6188 4.35037 13.4534 4.40451ZM4.94759 17.1877C4.69152 17.272 4.51595 17.4372 4.42477 17.6795C4.35526 17.8643 4.35973 19.3756 4.43084 19.7229C4.79451 21.4991 6.10631 22.7607 7.83385 22.9959C8.25394 23.053 19.1473 23.053 19.5674 22.9959C21.1809 22.7763 22.5022 21.5959 22.9013 20.0175C23.043 19.457 23.0887 17.9804 22.9738 17.6733C22.73 17.0215 21.8129 16.9818 21.4924 17.6091C21.4333 17.7248 21.4309 17.7533 21.4147 18.5084C21.3977 19.3016 21.3808 19.466 21.286 19.7612C20.9942 20.6695 20.1811 21.3116 19.2145 21.3972C18.8244 21.4318 8.57684 21.4318 8.18679 21.3972C7.24101 21.3134 6.43707 20.6938 6.13129 19.8129C6.02147 19.4965 6.00351 19.3365 5.98645 18.5212C5.97035 17.7525 5.96799 17.725 5.90883 17.6091C5.73076 17.2606 5.29988 17.0717 4.94759 17.1877Z" fill="#407439" />
                  </svg>
                  <div className="mx-2">Carregar dataset</div>
                </Styles.Control>
              </>
            );
          default: return null;
        }
      })()}

    </Styles.ControlBar>
  );
};

export default ControlBar;
