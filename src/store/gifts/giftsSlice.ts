import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GiftsStateStructure } from "./types";
import { GiftStructure } from "./types";

export const initialGiftsState: GiftsStateStructure = {
  gifts: [],
};

export const giftsSlice = createSlice({
  name: "gifts",
  initialState: initialGiftsState,
  reducers: {
    loadGifts: (
      currentState,
      action: PayloadAction<{ gifts: GiftStructure[] }>,
    ): GiftsStateStructure => ({
      ...currentState,
      gifts: [...action.payload.gifts],
    }),
  },
});

export const { loadGifts: loadGiftsActionCreator } = giftsSlice.actions;
export const giftsReducer = giftsSlice.reducer;
