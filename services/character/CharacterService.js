import * as MockService from "../../mock/MockCharacters";
import Character from "../../models/Character";

export function getCharacter(characterId, mock) {
  try {
    if (mock) {
      return MockService.getCharacterLocalStorage(characterId);
    }
    return Character();
  } catch (error) {
    console.error(error);
    return Character();
  }
}

export function addCharacter(character, mock) {
  try {
    if (!character.creationDate) {
      character.characterId = crypto.randomUUID();
      character.creationDate = new Date().toISOString();
    }
    character.updateDate = new Date().toISOString();

    if (mock) {
      MockService.addCharacterLocalStorage(character);
      return "Added";
    } else {
      return "Added";
    }
  } catch (error) {
    console.error(error);
    return "Error";
  }
}

/**
 * Service to get a list of user characters
 */
export function listCharacters(params, mock) {
  try {
    if (params.localstorage) {
      return MockService.getCharactersLocalStorage();
    } else if (mock) {
      return MockService.characters;
    } else {
      return [];
    }
  } catch (error) {
    return null;
  }
}
