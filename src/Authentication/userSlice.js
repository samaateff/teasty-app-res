import { createSlice } from '@reduxjs/toolkit';

const fakeUser = {
  id: 1,
  name: 'sama',
  email: 'sama@example.com',
  password: '1234',
  cart: [
    {
      id: 512,
      name: 'Pizza margrita',
      img: '/Rectangle157.jpg',
      price: 10.99,
      discount: 2,
      quantity: 2,
    },
    {
      id: 513,
      name: 'cheese burger',
      img: '/Rectangle157.jpg',
      price: 11.99,
      discount: 2,
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
