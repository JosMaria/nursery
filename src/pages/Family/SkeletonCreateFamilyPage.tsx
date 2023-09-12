const SkeletonCreateFamilyPage = () => (
  <section className='flex flex-col item-center gap-5 shadow animate-pulse py-5 px-2 max-xs:w-screen border-2'>
    <h1 className='h-8 w-64 bg-skin-skeleton rounded-md self-center'></h1>

    <article className='flex flex-col gap-5 border-skin-skeleton w-96 max-xs:w-full'>
      <div className='h-8 flex gap-5 max-xs:gap-3'>
        <div className='flex-1 max-xs:w-56 bg-skin-skeleton rounded-md'></div>
        <div className='w-10 max-xs:w-8 bg-skin-skeleton rounded-md'></div>
      </div>
      <div className='self-end h-8 w-32 bg-skin-skeleton rounded-md'></div>
      <div className='h-8 w-28 self-center bg-skin-skeleton rounded-md'></div>
    </article>

    <article className='flex flex-col gap-2 max-w-96 '>
      <h2 className='h-5 w-48 bg-skin-skeleton rounded-md'></h2>
      <div className='flex flex-col gap-3 w-full border-2 border-opacity-40 border-skin-skeleton p-2 '>
        {[...Array(10).keys()].map((i) => (
          <p key={i} className='h-3 w-full bg-skin-skeleton rounded-md'></p>
        ))}
      </div>
    </article>
  </section>
);

export default SkeletonCreateFamilyPage;
