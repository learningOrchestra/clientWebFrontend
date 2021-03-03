import React from 'react';

import { AuthenticationContextProvider } from './Authentication';
import { AuthorizationContextProvider } from './Authorization';
import { PopupMenuProjectContextProvider } from './PopupMenuProject';
import { ProjectsContextProvider } from './Projects';
import { ToggleSidebarContextProvider } from './ToggleSidebar';
import { ToastContextProvider } from './Toast';
import { ModalContextProvider } from './Modal';
import { UserContextProvider } from './User';

const ContextProvider = ({ children }) => (
  <UserContextProvider>
    <AuthenticationContextProvider>
      <AuthorizationContextProvider>
        <ProjectsContextProvider>
          <ToggleSidebarContextProvider>
            <ToastContextProvider>
              <ModalContextProvider>
                <PopupMenuProjectContextProvider>
                  {children}
                </PopupMenuProjectContextProvider>
              </ModalContextProvider>
            </ToastContextProvider>
          </ToggleSidebarContextProvider>
        </ProjectsContextProvider>
      </AuthorizationContextProvider>
    </AuthenticationContextProvider>
  </UserContextProvider>
);

export default ContextProvider;
