import Character from "../models/Character";

export function addOnLocalStorage() {
  localStorage.setItem("characters", JSON.stringify(characters));
}

export function addCharacterLocalStorage(character) {
  let charactersLocalStorage = [];
  charactersLocalStorage.concat(JSON.parse(localStorage.getItem("characters")));
  charactersLocalStorage.push(character);
  localStorage.removeItem("characters");
  localStorage.setItem("characters", JSON.stringify(charactersLocalStorage));
}

export const characters = [
  Character("Ira Schrek", "8", "Rogue", "Scout"),
  Character("Ira Schrek", "3", "Cleric", "Scout"),
  Character("Ira Schrek", "2", "Barbarian", "Scout"),
  Character("Ira Schrek", "6", "Fighter", "Scout"),
  Character("Ira Schrek", "1", "Bard", "Scout"),
];
