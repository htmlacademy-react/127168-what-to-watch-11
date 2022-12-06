import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {convertUserData} from '../user-data-converter';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const';
import {UserProcess} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {},
  authError: undefined,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = convertUserData(action.payload);
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.userData = convertUserData(action.payload);
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authError = undefined;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.authError = action.error.message;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.userData = {};
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
