import { createSlice } from '@reduxjs/toolkit';

const fakeUser = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password123',
  cart: [
    {
      id: 512,
      name: 'Pizza margrita',
      price: 10.99,
      quantity: 2,
    },
    {
      id: 513,
      name: 'cheese burger',
      price: 11.99,
      quantity: 3,
    },
  ],
  favourites: [
    {
      id: 512,
      name: 'Pizza margrita',
    },
    {
      id: 513,
      name: 'cheese burger',
    },
    {
      id: 514,
      name: 'steak',
    },
  ],
};
const initialState = {
  user: null,
  isAuthenticated: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login(state, action) {
      if (
        action.payload.email === fakeUser.email &&
        action.payload.password === fakeUser.password
      ) {
        state.user = fakeUser;
        state.isAuthenticated = true;
      }
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
