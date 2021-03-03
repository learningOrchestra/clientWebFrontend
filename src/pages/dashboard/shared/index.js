import React from 'react';

import Dashboard from '../../../components/Dashboard';

const Shared = () => {
  const breadcrumb = [{ name: 'Compartilhado comigo', url: null }];
  return <Dashboard breadcrumb={breadcrumb} />;
};

export default Shared;
