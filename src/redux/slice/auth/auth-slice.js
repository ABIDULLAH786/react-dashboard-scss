// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiPOST } from "../../../apis/service";

export const loginUserAsync = createAsyncThunk(
  "auth/login",
  async ({ username, email, password }, thunkAPI) => {
    try {
      thunkAPI.dispatch(loginUserStart());
      const response = await apiPOST("auth/login", {
        username,
        email,
        password,
      });
      if (response.status_code == 200) {
        thunkAPI.dispatch(loginUserSuccess(response));
      }
      return response;
    } catch (error) {
      thunkAPI.dispatch(loginUserFail(error.message));
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: null,
    loading: false,
    error: null,

    isRegisterLoading: null,
    isRegisterError: false,
  },
  reducers: {
    loginUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    loginUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerUserStart: (state) => {
      state.isRegisterLoading = true;
      state.isRegisterError = null;
    },
    registerUserSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    registerUserFail: (state, action) => {
      state.isRegisterLoading = false;
      state.isRegisterError = action.payload;
    },
  },
});

export const {
  loginUserStart,
  loginUserSuccess,
  loginUserFail,

  registerUserFail,
  registerUserStart,
  registerUserSuccess,
} = authSlice.actions;

export const selectAuthData = (state) => state.auth.data;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
