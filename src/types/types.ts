import type { types } from '@/types/actions';

export interface ActionReducer {
  type: keyof typeof types;
  payload: unknown;
}

export interface AuthState {
  name?: string;
  logged: boolean;
}
