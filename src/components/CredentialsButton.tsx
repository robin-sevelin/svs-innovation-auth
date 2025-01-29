import Link from 'next/link';
import React from 'react';
import { RainbowButton } from './ui/rainbow-button';

const CredentialsButton = () => {
  return (
    <Link href={'/credentials'}>
      <RainbowButton>With Credentials </RainbowButton>
    </Link>
  );
};

export default CredentialsButton;
