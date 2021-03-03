import React, { useEffect } from 'react';

import ProjectsIcon from '../../../../assets/icons/ProjectsIcon';

import Dashboard from '../../../../components/Dashboard';
import Files from '../../../../components/Files';

import { useProjectsContext } from '../../../../context/Projects';

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { _id } = params;
  return { props: { _id } };
}

const MyProjects = ({ _id }) => {
  const { projectData, handleGetProjectData } = useProjectsContext();

  useEffect(() => {
    (async () => {
      await handleGetProjectData(_id);
    })();
  }, [_id]);

  const breadcrumb = [
    { name: 'Meus Projetos', url: '/dashboard/projects' },
    { name: projectData?.name ?? '', url: null },
  ];

  return (
    <Dashboard breadcrumb={breadcrumb} Icon={ProjectsIcon}>
      <Files project={projectData} />
    </Dashboard>
  );
};

export default MyProjects;
