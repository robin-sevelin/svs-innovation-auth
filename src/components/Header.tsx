'use client';

import React from 'react';
import Navigation from './Navigation';
import LogoutButton from './LogoutButton';
import { useSession } from 'next-auth/react';
import { userState } from '@/lib/constants';

const Header = () => {
  const { status } = useSession();
  return (
    <header className='flex justify-between p-3'>
      <LogoutButton />
      {status === userState.isLoggedIn && <Navigation />}
    </header>
  );
};

export default Header;
