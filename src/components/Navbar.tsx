const navigation = ['Inicio', 'Listado', 'Novedades']

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-5 bg-slate-700 text-white'>
      <p>
        LOGO
      </p>
      <ul className='flex justify-center gap-5 text-xl '>
        {
          navigation.map((item, index) =>
            (<li key={index} onClick={() => console.log(`click on item ${item}`)}>{item}</li>))
        }
      </ul>
      <button onClick={() => console.log('open modal to sign in')}>
        Acceder
      </button>
    </nav>
  )
}