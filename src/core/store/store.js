import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import favoritesReducer from '../slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    favorites: favoritesReducer
  },
});
