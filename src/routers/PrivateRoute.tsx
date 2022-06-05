import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext, ContextProps } from '@/auth/authContext';
import { lastPathItem } from '@/shared/constants';

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const { authUser } = useContext(AuthContext) as ContextProps;
  const { pathname, search } = useLocation();

  window.localStorage.setItem(lastPathItem, `${pathname}${search}`);

  return authUser.logged ? children : <Navigate to="login" />;
};

export default PrivateRoute;
