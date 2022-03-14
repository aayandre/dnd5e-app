export default function Character(
  characterId = "",
  name = "",
  level = 0,
  className = "",
  subClassName = "",
  creationDate = "",
  updateDate = ""
) {
  return {
    characterId,
    name,
    level,
    className,
    subClassName,
    creationDate,
    updateDate,
  };
}