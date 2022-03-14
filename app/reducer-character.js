import { createSlice } from "@reduxjs/toolkit";
import { resetCharactersLocalStorage } from "../mock/MockCharacters";
import {
  addCharacter,
  listCharacters,
} from "../services/character/CharacterService";

const initialState = {
  character: {},
  characters: [],
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    loadCharacters: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.characters = listCharacters({ localstorage: true });
    },
    saveCharacter: (state, action) => {
      addCharacter(action.payload, true);
      state.characters = listCharacters({ localstorage: true });
    },
    resetCharacters: (state) => {
      resetCharactersLocalStorage();
      state.characters = listCharacters({ localstorage: true });
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadCharacters, saveCharacter, resetCharacters } =
  characterSlice.actions;

export default characterSlice.reducer;
