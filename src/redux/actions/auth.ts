import {
  LOGIN_WITH_THUNK,
  LOGIN_WITH_THUNK_SUCCESS,
  LOGIN_WITH_THUNK_FAILED,
} from './../constants/index';
import {PayloadAction} from '@reduxjs/toolkit';

export interface PayloadLogin {
  email: string;
  password: string;
  deviceId: string;
  currentLanguage?: string;
}

export function loginWithThunk(payload: any) {
  return {
    type: LOGIN_WITH_THUNK,
    payload: payload,
  };
}

export function loginWithThunkSuccess(payload: any) {
  return {
    type: LOGIN_WITH_THUNK_SUCCESS,
    payload: payload,
  };
}
export function loginWithThunkFailed(payload: any) {
  return {
    type: LOGIN_WITH_THUNK_FAILED,
    payload: payload,
  };
}
