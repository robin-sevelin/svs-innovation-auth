'use client';

import React, { FormEvent, useState } from 'react';

const Credentials = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('data', { email: email, password: password });
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='name@email.com'
      />
      <input
        type='password'
        value={password}
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default Credentials;
