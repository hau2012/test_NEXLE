import { LOGIN_WITH_THUNK, LOGIN_WITH_THUNK_FAILED, LOGIN_WITH_THUNK_SUCCESS } from './../constants/index';


export interface AuthState {
  login: {
    isError: boolean;
  };
  register: {
    isError: boolean;
    message: string;
  };
  forgotPassword: {
    isError: boolean;
    message: string;
  };
}

const defaultState = {
  login: {
    isError: false,
  },
  register: {
    isError: false,
    message: '',
  },
  forgotPassword: {
    isError: false,
    message: '',
  },
};
export default function authReducer(
  state: AuthState = defaultState,
  action: any,
) {
  switch (action.type) {
    case LOGIN_WITH_THUNK:
      return {...defaultState, login: {isError: false}};
    case LOGIN_WITH_THUNK_FAILED:
      return {...defaultState, login: {isError: true}};

    case LOGIN_WITH_THUNK_SUCCESS:
      return {...defaultState, register: {isError: false, message: ''}};
    default:
      return state;
  }
}
