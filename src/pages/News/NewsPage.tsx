import { Link } from 'react-router-dom';
import { Article } from './components';
import { NewsType } from './types';

const NEWS: Array<NewsType> = [
  {
    id: 1,
    title: 'React Canaries: Enabling Incremental Feature Rollout Outside Meta',
    date: new Date(2023, 8, 20),
    briefDescription:
      "We'd like to offer the React community an option to adopt individual new features as soon as their design is close to final, before they're released in a stable version—similar to how Meta has long used bleeding-edge versions of React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule.",
  },
  {
    id: 2,
    title: 'React Canaries: Enabling Incremental Feature Rollout Outside Meta',
    date: new Date(2023, 8, 20),
    briefDescription:
      "We'd like to offer the React community an option to adopt individual new features as soon as their design is close to final, before they're released in a stable version—similar to how Meta has long used bleeding-edge versions of React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule.",
  },
  {
    id: 3,
    title: 'React Canaries: Enabling Incremental Feature Rollout Outside Meta',
    date: new Date(2023, 8, 20),
    briefDescription:
      "We'd like to offer the React community an option to adopt individual new features as soon as their design is close to final, before they're released in a stable version—similar to how Meta has long used bleeding-edge versions of React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule.",
  },
];

const NewsPage = () => {
  const newsArticles = (
    <section className='flex flex-col gap-10'>
      <article className='flex gap-5'>
        <Link to='/plant' className='custom-btn-form'>Crear Planta</Link>
        <Link to='/family' className='custom-btn-form'>Crear Familia</Link>
      </article>
      {NEWS.map((news) => (
        <Article
          key={news.id}
          title={news.title}
          date={news.date}
          briefDescription={news.briefDescription}
        />
      ))}
    </section>
  );

  return (
    <div className='p-4 flex flex-col gap-7 max-w-4xl'>
      {/* Section title and Info to news */}
      <section className='flex flex-col gap-3'>
        <h1 className='text-4xl max-md:text-2xl max-xs:text-xl font-semibold tracking-wide'>
          Vivero Novedades
        </h1>
        <p className='text-lg max-md:text-sm max-xs:text-xs max-md:text-justify font-normal'>
          Esta secci&oacute;n es una mas de las fuentes de informaci&oacute;n sobre el vivero de la
          Facultad de desarrollo rural y territorial. Se encontrara notas, avisos, noticias y
          dem&aacute;s. Las publicaciones que se realizan es por parte de la administraci&oacute;n
          de esta p&aacute;gina. Esta secci&oacute;n es una mas de las fuentes de informaci&oacute;n
          sobre el vivero. Se encontrara notas, avisos, noticias y dem&aacute;s. Las publicaciones
          que se realizan es por parte de la administraci&oacute;n de esta p&aacute;gina.
        </p>
      </section>
      {newsArticles}
    </div>
  );
};

export default NewsPage;
