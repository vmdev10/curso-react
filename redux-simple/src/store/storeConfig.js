import { createStore, combineReducers } from "redux";

import numbersReducer from "./reducers/numbers";

const reducers = combineReducers({
  // Reducer que altera numbers (retorna um objeto)
  numbers: numbersReducer,

  // names: function (state, action) {
  //   console.log("REDUCER NAMES...");
  //   console.log(state, "", action);
  //   return ["Ana", "Bia", "Carlos"];
  // },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
