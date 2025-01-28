import React from 'react';
import Navigation from './Navigation';
import LogoutButton from './LogoutButton';

const Header = () => {
  return (
    <header className='flex justify-between p-3'>
      <LogoutButton />
      <Navigation />
    </header>
  );
};

export default Header;
