import React from 'react';
import Navigation from './Navigation';
import Button from './Button';

const Header = () => {
  return (
    <header className='flex justify-between p-2'>
      <h1>Auth</h1>
      <Navigation />
      <Button />
    </header>
  );
};

export default Header;
