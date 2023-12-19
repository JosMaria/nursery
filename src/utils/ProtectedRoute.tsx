import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  canActivate: boolean;
  redirectPath?: string;
}

export const ProtectedRoute = ({ canActivate, redirectPath = '/' }: ProtectedRouteProps) => {
  return canActivate ? <Outlet /> : <Navigate to={redirectPath} replace />;
};
