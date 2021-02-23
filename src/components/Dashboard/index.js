import React from 'react';

import * as Styles from './styles';

// import Layout from '../../layout/Private';

import Main from './Main';
import Navbar from './Navbar';
import ControlBar from './ControlBar';
import Sidebar from './Sidebar';

const Dashboard = ({ title, children }) => (
  // <Layout>
  <Styles.Container>
    <Navbar />
    <ControlBar />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Main title={title}>
        {children}
      </Main>
    </div>
  </Styles.Container>
  // </Layout>
);

export default Dashboard;
