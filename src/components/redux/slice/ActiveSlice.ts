import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ActiveState {
  active: number;
}

const initialState: ActiveState = {
  active: 0,
};

export const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    increaseActive: (state, action: PayloadAction<number>) => {
      if (state.active < 3) {
        state.active = action.payload + 1;
      }
    },
    decreaseActive: (state, action: PayloadAction<number>) => {
      if (state.active > 0) {
        state.active = action.payload - 1;
      }
    },
  },
});

export const { increaseActive, decreaseActive } = activeSlice.actions;
export const selectActive = (state: RootState) => state.active.active;

export default activeSlice.reducer;
