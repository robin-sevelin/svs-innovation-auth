import { auth, signIn } from '@/auth';
import { Meteors } from '@/components/ui/meteors';
import { RainbowButton } from '@/components/ui/rainbow-button';
import Link from 'next/link';
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
          try {
            await signIn('credentials', formData);
          } catch (error) {
            console.log(error);
          }
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
      <span>No account?</span>
      <Link href={'/create'}>
        <RainbowButton>Sign up</RainbowButton>
      </Link>
    </section>
  );
};

export default page;
