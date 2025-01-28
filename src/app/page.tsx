export default function Home() {
  const title = 'Hello auth';
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1 className='bold text-2xl'>{title.toUpperCase()}</h1>
    </div>
  );
}
