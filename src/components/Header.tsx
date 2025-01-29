import React from 'react';
import Navigation from './Navigation';
import LogoutButton from './LogoutButton';
import { auth } from '@/auth';

const Header = async () => {
  const session = await auth();

  return (
    <header className='flex justify-between p-3'>
      {session && <LogoutButton session={session} />}
      {session && <Navigation />}
    </header>
  );
};

export default Header;
