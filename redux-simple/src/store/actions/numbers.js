// Action creator
export function changeMinNumber(newNumber) {
  // Retorna uma action
  return {
    type: "CHANGE_MIN_NUM", // Nome da action
    payload: newNumber,
  };
}

export function changeMaxNumber(newNumber) {
  return {
    type: "CHANGE_MAX_NUM",
    payload: newNumber,
  };
}
