import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext, ContextProps } from '@/auth/authContext';

interface Props {
  children: JSX.Element;
}

const PublicRoute = ({ children }: Props) => {
  const { authUser } = useContext(AuthContext) as ContextProps;

  return authUser.logged ? <Navigate to="/" /> : children;
};

export default PublicRoute;
