'use client';

import React from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

const Button = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      {status === 'authenticated' ? (
        <button
          onClick={() => {
            signOut();
          }}
        >
          <Image
            src={session?.user?.image || '/public/placeholder.jpg'}
            alt='profile picture'
            width={50}
            height={50}
          />
          Sign out
        </button>
      ) : (
        <button
          onClick={() => {
            signIn('github');
          }}
        >
          Sign in
        </button>
      )}
    </div>
  );
};

export default Button;
