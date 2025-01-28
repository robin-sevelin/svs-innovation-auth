import { signIn } from '@/auth';
import { RainbowButton } from './ui/rainbow-button';

const LoginButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github', { redirectTo: '/dashboard' });
      }}
    >
      <RainbowButton type='submit'>Sign in with GitHub</RainbowButton>
    </form>
  );
};

export default LoginButton;
