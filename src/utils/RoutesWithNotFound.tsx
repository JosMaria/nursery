import { Route, Routes } from 'react-router'

interface Props {
  children: JSX.Element | Array<JSX.Element>
}

export const RoutesWithNotFound = ({ children }: Props) => (
  <Routes>
    {children}
    <Route path='*' element={<h1>NOT FOUND</h1>} />
  </Routes>
)
