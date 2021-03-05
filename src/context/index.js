import React from 'react';

import { AuthenticationContextProvider } from './Authentication';
import { AuthorizationContextProvider } from './Authorization';
import { PopupMenuProjectContextProvider } from './PopupMenuProject';
import { ProjectsContextProvider } from './Projects';
import { FilesContextProvider } from './Files';
import { ToggleSidebarContextProvider } from './ToggleSidebar';
import { ToastContextProvider } from './Toast';
import { ModalContextProvider } from './Modal';
import { UserContextProvider } from './User';

const ContextProvider = ({ children }) => (
  <UserContextProvider>
    <AuthenticationContextProvider>
      <AuthorizationContextProvider>
        <ProjectsContextProvider>
          <FilesContextProvider>
            <ToggleSidebarContextProvider>
              <ToastContextProvider>
                <ModalContextProvider>
                  <PopupMenuProjectContextProvider>
                    {children}
                  </PopupMenuProjectContextProvider>
                </ModalContextProvider>
              </ToastContextProvider>
            </ToggleSidebarContextProvider>
          </FilesContextProvider>
        </ProjectsContextProvider>
      </AuthorizationContextProvider>
    </AuthenticationContextProvider>
  </UserContextProvider>
);

export default ContextProvider;
