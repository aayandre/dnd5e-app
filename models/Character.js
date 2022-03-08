export default function Character(
  name = "",
  level = 0,
  className = "",
  subClassName = "",
  creationDate = "",
  updateDate = ""
) {
  return {
    name,
    level,
    className,
    subClassName,
    creationDate,
    updateDate,
  };
}
