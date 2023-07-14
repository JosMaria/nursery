import { NavLink } from "react-router-dom";

export const TechnicalSheet = () => (
  <article className='bg-blue-700 px-10 py-5 flex flex-col gap-5'>
    <nav className='p-2 flex gap-10 text-xl  border-gray-400 border-b-2 font-medium'>
      <NavLink to='/product/#/technical-sheet'>
        Ficha Tecnica
      </NavLink>
      <NavLink to='/product/#/notes'>
        Notas
      </NavLink>
    </nav>

    <section className='bg-blue-200 px-5'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
    </section>
  </article>
)
