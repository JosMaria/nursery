import { NavLink, Outlet } from 'react-router-dom'

export const MoreInformation = () => {
  const NAVLINKS = [
    {
      text: 'Ficha Tecnica',
      path: '.',
    },
    {
      text: 'Detalles',
      path: 'details',
    },
    {
      text: 'Notas',
      path: 'notes',
    }
  ]

  return (
    <div>
      <nav className='p-2 flex gap-10 text-xl font-medium'>
        {NAVLINKS.map(item => (
          <NavLink
            key={item.text}
            to={item.path}
            className={({ isActive }) => isActive ? 'underline' : ''}
          >
            {item.text}
          </NavLink>))}
      </nav>
      <Outlet />
    </div>
  )
}
