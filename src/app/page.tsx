import CredentialsButton from '@/components/CredentialsButton';
import GitHubButton from '@/components/GitHubButton';
import { Meteors } from '@/components/ui/meteors';
import Image from 'next/image';

export default function Home() {
  return (
    <section className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
      <Meteors number={30} />
      <Image
        className=' rounded-md'
        alt='auth logo'
        src={'/325861c3-21b2-46e5-90d8-97d0ff23d789.png'}
        height={200}
        width={300}
      />

      <span className='mb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
        Sign in
      </span>
      <GitHubButton />
      <CredentialsButton />
    </section>
  );
}
