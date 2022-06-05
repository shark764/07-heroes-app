import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, ContextProps } from '@/auth/authContext';
import { lastPathItem } from '@/shared/constants';
import { types } from '@/types/actions';
import type { ActionReducer } from '@/types/types';

const LoginScreen = () => {
  const navigate = useNavigate();
  const { updateAuthUser } = useContext(AuthContext) as ContextProps;

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: 'Daniel Hernandez' },
    };
    updateAuthUser(action as ActionReducer);

    const lastPath = window.localStorage.getItem(lastPathItem) ?? '/';

    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h4>Login</h4>

      <hr />

      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
