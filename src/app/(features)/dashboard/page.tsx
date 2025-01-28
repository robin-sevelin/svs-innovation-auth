import { Meteors } from '@/components/ui/meteors';
import { routes } from '@/lib/constants';
import React from 'react';

const page = () => {
  return (
    <section className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
      <Meteors number={30} />
      <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
        This is a page for {routes.DASHBOARD}.
      </span>
    </section>
  );
};

export default page;
