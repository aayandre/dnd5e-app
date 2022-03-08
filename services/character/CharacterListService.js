import { characters, addOnLocalStorage } from "../../mock/charactersList";
/**
 * Service to get a list of user characters
 */
export function listCharacters(params, mock) {
  try {
    if (params.localstorage) {
      return;
    } else if (mock) {
      return characters;
    } else {
      return [];
    }
  } catch (error) {
    return null;
  }
}

export function createMockCharactersLocalStorage() {
  addOnLocalStorage();
  return;
}
