'use client';

import React from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

interface Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

const LogoutButton = ({ session }: { session: Session }) => {
  if (!session) return null;

  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      <Image
        src={session?.user?.image ?? '/placeholder.jpg'}
        onError={(e) => (e.currentTarget.src = '/placeholder.jpg')}
        alt='Profile picture'
        width={50}
        height={50}
        priority
      />
      Sign out
    </button>
  );
};

export default LogoutButton;
