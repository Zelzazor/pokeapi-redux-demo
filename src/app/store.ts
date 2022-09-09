import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pokeReducer from "../features/poke-api/poke.slices";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    pokemon: pokeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
