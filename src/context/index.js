import React from 'react';

import { AuthenticationContextProvider } from './Authentication';
import { AuthorizationContextProvider } from './Authorization';
import { PopupMenuProjectContextProvider } from './PopupMenuProject';
import { ProjectsContextProvider } from './Projects';
import { ToggleSidebarContextProvider } from './ToggleSidebar';
import { ToastContextProvider } from './Toast';
import { UserContextProvider } from './User';

const ContextProvider = ({ children }) => (
  <UserContextProvider>
    <AuthenticationContextProvider>
      <AuthorizationContextProvider>
        <ProjectsContextProvider>
          <ToggleSidebarContextProvider>
            <ToastContextProvider>
              <PopupMenuProjectContextProvider>
                {children}
              </PopupMenuProjectContextProvider>
            </ToastContextProvider>
          </ToggleSidebarContextProvider>
        </ProjectsContextProvider>
      </AuthorizationContextProvider>
    </AuthenticationContextProvider>
  </UserContextProvider>
);

export default ContextProvider;
