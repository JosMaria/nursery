import { Link } from 'react-router-dom';

const SingleNewsPage = () => {
  // const { id } = useParams();

  return (
    <section className='flex flex-col lg:w-4/5 xl:w-2/3 2xl:w-1/2 gap-5 p-5'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-4xl font-semibold max-md:text-xl'>
          React Canaries: Enabling Incremental Feature Rollout Outside Meta
        </h1>
        <p className='text-lg max-md:text-base font-medium text-gray-500'>
          3 de Mayo del 2023
        </p>
      </div>
      <h2 className='text-xl max-sm:text-sm font-medium'>
        We'd like to offer the React community an option to adopt individual new
        features as soon as their design is close to final, before they're
        released in a stable version—similar to how Meta has long used
        bleeding-edge versions of React internally. We are introducing a new
        officially supported Canary release channel. It lets curated setups like
        frameworks decouple adoption of individual React features from the React
        release schedule
      </h2>
      <div className='flex flex-col gap-5 text-lg max-sm:text-sm'>
        <p>
          However, this isn’t always possible. Sometimes, new features are
          interconnected with other new features which have not yet been fully
          completed and that we’re still actively iterating on. We can’t release
          them separately because their implementations are related. We can’t
          version them separately because they affect the same packages (for
          example, react and react-dom). And we need to keep the ability to
          iterate on the pieces that aren’t ready without a flurry of major
          version releases, which semver would require us to do. At Meta, we’ve
          solved this problem by building React from the main branch, and
          manually updating it to a specific pinned commit every week. This is
          also the approach that React Native releases have been following for
          the last several years. Every stable release of React Native is pinned
          to a specific commit from the main branch of the React repository.
          This lets React Native include important bugfixes and incrementally
          adopt new React features at the framework level without getting
          coupled to the global React release schedule.
        </p>
        <p>
          However, this isn’t always possible. Sometimes, new features are
          interconnected with other new features which have not yet been fully
          completed and that we’re still actively iterating on. We can’t release
          them separately because their implementations are related. We can’t
          version them separately because they affect the same packages (for
          example, react and react-dom). And we need to keep the ability to
          iterate on the pieces that aren’t ready without a flurry of major
          version releases, which semver would require us to do. At Meta, we’ve
          solved this problem by building React from the main branch, and
          manually updating it to a specific pinned commit every week. This is
          also the approach that React Native releases have been following for
          the last several years. Every stable release of React Native is pinned
          to a specific commit from the main branch of the React repository.
          This lets React Native include important bugfixes and incrementally
          adopt new React features at the framework level without getting
          coupled to the global React release schedule.
        </p>
      </div>
      <Link
        to='..'
        relative='path'
        className='custom-btn-form w-fit flex gap-3 max-sm:text-xs'
      >
        &#10229;<span>Volver</span>
      </Link>
    </section>
  );
};

export default SingleNewsPage;
