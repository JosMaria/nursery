const NEWS = [
  {
    id: 1,
    title: 'React Canaries: Enabling Incremental Feature Rollout Outside Meta',
    date: '3-11-2010',
    briefDescription:
      "We'd like to offer the React community an option to adopt individual new features as soon as their design is close to final, before they’re released in a stable version—similar to how Meta has long used bleeding-edge versions of React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule.",
  },
];

export const NewsPage = () => {
  const newsHeader = (
    <section className='p-4 w-full md:w-4/5 lg:w-3/5 xl:w-1/2 flex flex-col gap-3 bg-stone-300'>
      <h1 className='max-md:text-2xl text-4xl font-semibold tracking-wide'>
        Vivero Novedades
      </h1>
      <p className='max-md:text-sm max-md:text-justify font-normal text-lg'>
        Esta secci&oacute;n es una mas de las fuentes de informaci&oacute;n
        sobre el vivero. Se encontrara notas, avisos, noticias y dem&aacute;s.
        Las publicaciones que se realizan es por parte de la
        administraci&oacute;n de esta p&aacute;gina. Esta secci&oacute;n es una
        mas de las fuentes de informaci&oacute;n sobre el vivero. Se encontrara
        notas, avisos, noticias y dem&aacute;s. Las publicaciones que se
        realizan es por parte de la administraci&oacute;n de esta p&aacute;gina.
      </p>
    </section>
  );

  const newsArticles = (
    <section>
      <h2>
        {NEWS.map((news) => (
          <article>
            <h2>{news.title}</h2>
            <span>{news.date}</span>
            <p>{news.briefDescription}</p>
            Read more...
          </article>
        ))}
      </h2>
    </section>
  );

  return (
    <>
      {newsHeader}
      {newsArticles}
    </>
  );
};
