'use client';

import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { userState } from '@/lib/constants';

const LogoutButton = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      {status === userState.isLoggedIn && (
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
      )}
    </div>
  );
};

export default LogoutButton;
