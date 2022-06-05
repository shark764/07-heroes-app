import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { authUserItem } from '@/shared/constants';
import type { ActionReducer, AuthState } from '@/types/types';
import authReducer, { initialState } from './authReducer';

export interface ContextProps {
  authUser: AuthState;
  updateAuthUser: Dispatch<ActionReducer>;
}
interface Props {
  children: ReactNode;
}

export const AuthContext = createContext<ContextProps | null>(null);

const init = () =>
  JSON.parse(window.localStorage.getItem(authUserItem) ?? '{"logged": false}');

const AuthContextProvider = ({ children }: Props) => {
  const [authUser, updateAuthUser] = useReducer(
    authReducer,
    initialState,
    init
  );

  const value = useMemo(() => ({ authUser, updateAuthUser }), [authUser]);

  useEffect(() => {
    if (authUser) {
      window.localStorage.setItem(authUserItem, JSON.stringify(authUser));
    }
  }, [authUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
