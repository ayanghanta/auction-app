import { createSlice } from "@reduxjs/toolkit";

const FAKE_USER = {
  name: "Wrishita Mal",
  email: "wrishitam@gmail.com",
  password: "123a",
  address: "",
  walletBalance: 0,
};

const initialState = {
  isLogin: false,
  user: {},
  // isLogin: true,
  // user: FAKE_USER,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      if (
        action.payload.email === FAKE_USER.email &&
        action.payload.password === FAKE_USER.password
      ) {
        state.user = action.payload;
        state.isLogin = true;
      }
    },
    logout(state) {
      state.isLogin = false;
      state.user = {};
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
