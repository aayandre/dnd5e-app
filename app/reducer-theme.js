import { createSlice } from "@reduxjs/toolkit";
import Colors from "../constants/Colors";

const initialState = {
  defaultTheme: "book",
  currentTheme: "book",
  themes: { ...Colors },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
