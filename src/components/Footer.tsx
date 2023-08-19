import { TEXT_COPYRIGHT, TEXT_INFORMATION, TEXT_ABOUT } from './constants';

//TODO: do i change <a> by <Link>?
export const Footer = () => {
  const copyright = (
    <div className='py-2 flex text-center justify-center text-sm max-md:text-xs'>
      <p className='flex flex-wrap justify-center'>
        <span>{TEXT_COPYRIGHT.title}&nbsp;-&nbsp;</span>
        <a
          className='underline font-medium'
          href={TEXT_COPYRIGHT.linkReference}
        >
          <b>{TEXT_COPYRIGHT.textReference}</b>
        </a>
      </p>
    </div>
  );

  const sections = (
    <div className='flex flex-wrap justify-around content-center p-4 gap-10'>
      <FooterSection
        title={TEXT_INFORMATION.title}
        content={TEXT_INFORMATION.content}
      />
      <FooterSection title={TEXT_ABOUT.title} content={TEXT_ABOUT.content} />
    </div>
  );

  return (
    <footer className='bg-skin-dark text-skin-light font-light max-md:text-xs'>
      {sections}
      <hr />
      {copyright}
    </footer>
  );
};

interface FooterSectionProps {
  title: string;
  content: string;
}

const FooterSection = ({ title, content }: FooterSectionProps) => (
  <div className='w-[40em]'>
    <h2 className='text-lg font-medium'>{title}</h2>
    <p className='text-justify text-sm'>{content}</p>
  </div>
);
