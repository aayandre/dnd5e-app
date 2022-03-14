import Character from "../models/Character";

export function addCharactersLocalStorage() {
  localStorage.setItem("characters", JSON.stringify(characters));
}

export function addCharacterLocalStorage(character) {
  let charactersLocalStorage = JSON.parse(localStorage.getItem("characters"));

  charactersLocalStorage.push(character);

  localStorage.removeItem("characters");
  localStorage.setItem("characters", JSON.stringify(charactersLocalStorage));
}

export function updateCharacterLocalStorage(character) {
  let charactersLocalStorage = JSON.parse(localStorage.getItem("characters"));

  charactersLocalStorage.push(character);

  localStorage.removeItem("characters");
  localStorage.setItem("characters", JSON.stringify(charactersLocalStorage));
}

export function getCharacterLocalStorage(characterId) {
  let charactersLocalStorage = JSON.parse(localStorage.getItem("characters"));

  let character = charactersLocalStorage.find(
    (element) => element.characterId == characterId
  );

  if (!character) {
    return null;
  }
  return character;
}

export function getCharactersLocalStorage(reload) {
  try {
    if (reload) {
      addCharactersLocalStorage();
    }
    return JSON.parse(localStorage.getItem("characters"));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function resetCharactersLocalStorage() {
  localStorage.removeItem("characters");
  addCharactersLocalStorage();
}

export const characters = [
  Character(crypto.randomUUID(), "Ira Schrek", "8", "Rogue", "Scout"),
  Character(crypto.randomUUID(), "Ira Schrek", "3", "Cleric", "Scout"),
  Character(crypto.randomUUID(), "Ira Schrek", "2", "Barbarian", "Scout"),
  Character(crypto.randomUUID(), "Ira Schrek", "6", "Fighter", "Scout"),
  Character(crypto.randomUUID(), "Ira Schrek", "1", "Bard", "Scout"),
];
