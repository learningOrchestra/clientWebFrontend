import React from 'react';

import Dashboard from '../../../components/Dashboard';

const Starred = () => {
  const breadcrumb = [{ name: 'Favoritos', url: null }];
  return <Dashboard breadcrumb={breadcrumb} />;
};

export default Starred;
