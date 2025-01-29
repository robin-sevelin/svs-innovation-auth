import { Meteors } from '@/components/ui/meteors';
import { routes } from '@/lib/constants';
import React from 'react';

const page = () => {
  return (
    <section className='section-class'>
      <Meteors number={30} />
      <span className='span-class'>This is a page for {routes.CONTACT}.</span>
    </section>
  );
};

export default page;
