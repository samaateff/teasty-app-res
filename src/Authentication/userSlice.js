import { createSlice } from '@reduxjs/toolkit';

const fakeUser = {
  id: 1,
  name: 'sama',
  email: 'sama@example.com',
  password: '1234',
  cart: {
    discount: 0,
    cartItems: [
      {
        id: 512,
        name: 'Pizza margrita',
        img: '/Rectangle157.jpg',
        price: 10.99,
        discount: 2,
        quantity: 2,
        ingredient: ['meat', 'potato'],
      },
      // {
      //   id: 513,
      //   name: 'cheese burger',
      //   img: '/Rectangle157.jpg',
      //   price: 11.99,
      //   discount: 2,
      //   quantity: 3,
      // },
      // {
      //   id: 515,
      //   name: 'cheese burger',
      //   img: '/Rectangle157.jpg',
      //   price: 11.99,
      //   discount: 2,
      //   quantity: 3,
      // },
    ],
  },
  favourites: [],
  notifications: [
    {
      id: 513,
      name: 'cheese burger',
      img: '/Rectangle157.jpg',
      price: 11.99,
      discount: 2,
      quantity: 3,
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
    addToCart(state, action) {
      if (state.user) {
        const existingItem = state.user.cart.cartItems.find(
          (item) => item.id === action.payload.id
        );
        if (!existingItem) {
          state.user.cart.cartItems = [
            ...state.user.cart.cartItems,
            action.payload,
          ];
        }
      }
    },
    removeFromCart(state, action) {
      if (state.user) {
        state.user.cart.cartItems = state.user.cart.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },

    addToFav(state, action) {
      if (state.user) {
        state.user.favourites = [...state.user.favourites, action.payload];
      }
    },
    removeFromFav(state, action) {
      if (state.user) {
        state.user.favourites = state.user.favourites.filter(
          (item) => item.id !== action.payload
        );
      }
    },
  },
});
export const {
  login,
  logout,
  addToCart,
  addToFav,
  removeFromCart,
  removeFromFav,
} = userSlice.actions;
export default userSlice.reducer;
