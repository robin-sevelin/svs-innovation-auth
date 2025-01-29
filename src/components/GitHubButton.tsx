import { signIn } from '@/auth';
import { RainbowButton } from './ui/rainbow-button';

const GitHubButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github', { redirectTo: '/dashboard' });
      }}
    >
      <RainbowButton type='submit'>With GitHub</RainbowButton>
    </form>
  );
};

export default GitHubButton;
