'use client';

import { Meteors } from '@/components/ui/meteors';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { UserInterface } from '@/db/models/user';
import { useRouter } from 'next/navigation';

import React, { FormEvent, useState } from 'react';

const Create = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (formData: UserInterface, e: FormEvent) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3000/api', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        headers: { 'Content-type': 'application/json' },
      });

      setEmail('');
      setPassword('');

      router.push('/credentials');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className='section-class'>
      <Meteors number={30} />
      <span className='span-class'>Enter E-mail and password</span>
      <form
        className='flex flex-col gap-2 '
        onSubmit={(e) => handleSubmit({ email, password }, e)}
      >
        <label>
          Email
          <input
            name='email'
            value={email}
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            name='password'
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <RainbowButton>Create user</RainbowButton>
      </form>
    </section>
  );
};

export default Create;
