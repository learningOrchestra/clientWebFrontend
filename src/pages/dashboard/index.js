import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => router.push('/dashboard/projects'), []);

  return <div />;
};

export default Dashboard;
