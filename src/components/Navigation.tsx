import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
