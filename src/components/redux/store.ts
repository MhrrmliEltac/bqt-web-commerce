import { configureStore } from "@reduxjs/toolkit";
import { activeSlice } from "./slice/ActiveSlice";

export const store = configureStore({
  reducer: {
    active: activeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
