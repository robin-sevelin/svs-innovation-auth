'use client';

import React from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import NoUser from './NoUser';

interface Session {
  user: {
    email: string;
    image: string;
  };
}

const LogoutButton = ({ session }: { session: Session }) => {
  const { image, email } = session.user;

  return (
    <>
      {session ? (
        <button
          onClick={() => {
            signOut();
          }}
        >
          <Image
            src={image ?? '/placeholder.jpg'}
            onError={(e) => (e.currentTarget.src = '/placeholder.jpg')}
            alt='Profile picture'
            width={50}
            height={50}
            priority
          />
          Sign out {email}
        </button>
      ) : (
        <NoUser />
      )}
    </>
  );
};

export default LogoutButton;
