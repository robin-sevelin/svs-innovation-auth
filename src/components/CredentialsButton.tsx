import Link from 'next/link';
import React from 'react';
import { RainbowButton } from './ui/rainbow-button';

const CredentialsButton = () => {
  return (
    <RainbowButton>
      <Link href={'/credentials'}>With Credentials</Link>
    </RainbowButton>
  );
};

export default CredentialsButton;
