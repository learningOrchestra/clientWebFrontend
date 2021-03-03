import React from 'react';

import * as Styles from './styles';

import Main from './Main';
import Navbar from './Navbar';
import ControlBar from './ControlBar';
import Sidebar from './Sidebar';

const Dashboard = ({ breadcrumb, children }) => (
  <Styles.Container>
    <Navbar />
    <ControlBar />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Main breadcrumb={breadcrumb}>
        {children}
      </Main>
    </div>
  </Styles.Container>
);

export default Dashboard;
