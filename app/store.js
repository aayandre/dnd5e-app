import { configureStore } from "@reduxjs/toolkit";
import reducerCharacter from "./reducer-character";
import reducerTheme from "./reducer-theme";

export const store = configureStore({
  reducer: {
    character: reducerCharacter,
    theme: reducerTheme,
  },
});
