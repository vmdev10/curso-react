import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  // Reducer que altera numbers (retorna um objeto)
  numbers: function (state, action) {
    console.log("REDUCER NUMBERS...");
    console.log(state, "", action);

    switch (action.type) {
      case "CHANGE_MIN_NUM":
        return {
          ...state,
          min: action.payload,
        };

      case "CHANGE_MAX_NUM":
        return {
          ...state,
          max: action.payload,
        };

      default:
        return {
          min: 1,
          max: 10,
        };
    }
  },

  names: function (state, action) {
    console.log("REDUCER NAMES...");
    console.log(state, "", action);
    return ["Ana", "Bia", "Carlos"];
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
