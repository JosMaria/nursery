export const SingleProduct = () => {
  return (
    <>
      <article className='flex gap-10 h-96 bg-red-600 p-5'>
        <section className='w-1/2 bg-red-400'>
          Imagenes
        </section>
        <section className='w-1/2 bg-red-300 flex flex-col gap-5'>
          <div className="h-1/2 bg-red-900">
            Information
          </div>
          <div className="h-1/2 bg-red-100">
            Details
          </div>
        </section>
      </article>

      <article className="bg-blue-700 px-10 py-5 flex flex-col gap-5">
        <nav className="flex gap-5 bg-blue-400">
          <div>Description</div>
          <div>Notas</div>
        </nav>
        <hr />
        <section className="bg-blue-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
        </section>
      </article>

      <article className=" bg-green-700 px-10 py-5 flex flex-col gap-5">
        <h1>Sugerencias</h1>
        <section className="bg-green-300 flex gap-10">
          <div>Sugerencias 1</div>
          <div>Sugerencias 2</div>
          <div>Sugerencias 3</div>
        </section>
      </article>
    </>

  )
}
