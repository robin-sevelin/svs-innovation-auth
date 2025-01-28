import { pageUrls } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav className='flex justify-center items-center'>
      <ul className='flex gap-3'>
        {pageUrls.map((url) => (
          <li key={url.id}>
            <Link href={url.url}>{url.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
