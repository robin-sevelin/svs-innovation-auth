import { auth, signIn } from '@/auth';
import { Meteors } from '@/components/ui/meteors';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await auth();
  if (session) redirect('/');

  return (
    <section className='section-class'>
      <Meteors number={30} />
      <span className='span-class'>Enter E-mail and password</span>
      <form
        className='flex flex-col gap-2 '
        action={async (formData) => {
          'use server';
          await signIn('credentials', formData);
        }}
      >
        <label>
          Email
          <input name='email' type='email' />
        </label>
        <label>
          Password
          <input name='password' type='password' />
        </label>
        <RainbowButton>Sign In</RainbowButton>
      </form>
    </section>
  );
};

export default page;
