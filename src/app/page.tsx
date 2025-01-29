import CredentialsButton from '@/components/CredentialsButton';
import GitHubButton from '@/components/GitHubButton';
import { Meteors } from '@/components/ui/meteors';

export default function Home() {
  return (
    <section className='section-class'>
      <Meteors number={30} />
      <span className='span-class mb-4'>Sign in</span>
      <GitHubButton />
      <CredentialsButton />
    </section>
  );
}
