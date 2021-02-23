import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ModalLogout from '../components/Modal/Logout';

import { useAuthorizationContext } from '../context/Authorization';

const Private = ({ children }) => {
  const router = useRouter();

  const authorization = useAuthorizationContext();

  const [show, setShow] = useState(false);

  const handlePrivate = async (auth) => {
    if (!auth) router.push('/login');
    else setShow(true);
  };

  const handlePublic = async (auth) => {
    if (auth) router.push('/dashboard');
    else setShow(true);
  };

  useEffect(() => {
    const { pathname } = router;
    if (pathname === '/') {
      setShow(true);
      return;
    }
    (async () => {
      const auth = await authorization.verify();
      if (pathname.includes('login')
      || pathname.includes('signup')) await handlePublic(auth);
      else await handlePrivate(auth);
    })();
  }, [router]);

  if (!show) return null;

  return (
    <div className="layout">
      {children}
      <ModalLogout />
    </div>
  );
};

export default Private;
