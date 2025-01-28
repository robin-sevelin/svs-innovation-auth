// import Credentials from '@/components/Credentials';
import GitHubButton from '@/components/GitHubButton';
import { Meteors } from '@/components/ui/meteors';

export default function Home() {
  return (
    <section className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
      <Meteors number={30} />
      <span className='mb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
        WELCOME
      </span>
      <GitHubButton />
      {/* <Credentials /> */}
    </section>
  );
}
