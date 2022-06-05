// state = {
//   name: 'Shark',
//   logged: true,
// };

import { types } from '@/types/actions';
import type { ActionReducer, AuthState } from '@/types/types';

export const initialState: AuthState = {
  name: '',
  logged: false,
};

const authReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  { type, payload }: ActionReducer
): AuthState => {
  switch (type) {
    case types.login:
      return {
        ...state,
        ...(payload as Record<string, unknown>),
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};

export default authReducer;
