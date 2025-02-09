'use client';

import { formSchema } from '@/db/models/formSchema';
import { UserInterface } from '@/db/models/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const Create = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInterface>({
    resolver: zodResolver(formSchema),
  });

  const submitData = async (formData: UserInterface) => {
    try {
      await fetch('http://localhost:3000/api', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        headers: { 'Content-type': 'application/json' },
      });

      router.push('/credentials');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' {...register('email')} />
      <div>
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>
      <label htmlFor='password'>Password</label>
      <input type='password' id='password' {...register('password')} />
      <div>
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Create;
