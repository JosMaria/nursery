const TEXT_INFORMATION = {
  title: 'Antecedentes históricos FDRyT',
  content:
    'La Facultad de Desarrollo Rural y Territorial «Dr. Jorge Trigo Andia» (FDRyT) fue fundada el 14 de marzo de 1949, con el nombre de Escuela Practica de Agricultura (EPA), formando peritos agrícolas. en 1969 cambia de nombre a Escuela Técnica de Agricultura (ETA), formando técnicos agrónomos. Posteriormente, en 1982, producto de varios procesos de reestructuración del país y de la misma UMSS, cambia de nombre, transformándose en la Escuela Técnica Superior de Agronomía (ETSA) formando Técnicos Superior en Agronomía. Finalmente, el 9 de abril de 2013, producto de varios procesos institucionales internos, la unidad académica cambia de nombre y se constituye en la Facultad de Desarrollo Rural y Territorial «Dr. Jorge Trigo Andia»',
};

const TEXT_ABOUT = {
  title: 'Antecedentes históricos VIVERO FDRyT',
  content:
    'El vivero FDRyT se constituyo en el año 1998 con el objetivo generar un Centro especializado productivo y de capacitación dirigida principalmente a complementar la formación de los estudiantes de las carreras de Ingeniería Tecnico Superior en Agronomia en la temática de producción de plantas forestales, frutales, ornamentales, crasas, suculentas, exóticas, etc. y todas sus actividades relacionadas. Asimismo, desde la unidad se realizan actividades de extensión y de vinculación con el medio. El vivero FDRyT también realiza actividades conjuntas con Cátedras, Instituciones, etc. con la intención de generar Actividades Optativas como talleres, cursos, seminarios y pasantías en donde puedan participar todos los alumnos. El vivero FDRyT es también un espacio abierto para el desarrollo de tesinas.',
};

const TEXT_COPYRIGHT = {
  title: 'DERECHOS RESERVADOS  ©  2023',
  textReference: 'UNIVERSIDAD MAYOR DE SAN SIMÓN',
  linkReference: 'https://www.umss.edu.bo/',
};

//TODO: do i change <a> by <Link>?
export const Footer = () => (
  <footer className='max-sm:text-sm max-xs:text-xs bg-custom-dark text-custom-light'>
    <div className='flex flex-wrap justify-around content-center p-2 gap-10 max-sm:gap-3'>
      <FooterSection title={TEXT_INFORMATION.title} content={TEXT_INFORMATION.content} />
      <FooterSection title={TEXT_ABOUT.title} content={TEXT_ABOUT.content} />
    </div>
    <hr />
    <section className='py-2 flex text-center justify-center text-sm max-sm:text-xs'>
      <p className='flex flex-wrap justify-center'>
        <span>{TEXT_COPYRIGHT.title}&nbsp;-&nbsp;</span>
        <a className='underline font-medium' href={TEXT_COPYRIGHT.linkReference}>
          <b>{TEXT_COPYRIGHT.textReference}</b>
        </a>
      </p>
    </section>
  </footer>
);

interface FooterSectionProps {
  title: string;
  content: string;
}

const FooterSection = ({ title, content }: FooterSectionProps) => (
  <article className='max-w-2xl flex flex-col gap-1'>
    <h2 className='md:text-lg text-base font-medium'>{title}</h2>
    <p className='text-justify'>{content}</p>
  </article>
);
