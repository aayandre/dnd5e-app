import { addCharacterLocalStorage } from "../../mock/charactersList";

export function addCharacter(character, mock) {
  try {
    if (mock) {
      addCharacterLocalStorage(character);
      return "Added";
    } else {
      return "Added";
    }
  } catch (error) {
    console.error(error);
    return "Error";
  }
}
