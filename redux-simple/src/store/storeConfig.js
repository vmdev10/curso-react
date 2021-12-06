import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  // Reducer que altera numbers (retorna um objeto)
  numbers: function (state, action) {
    return {
      min: 1,
      max: 10,
    };
  },

  names: function (state, action) {
    return ["Ana", "Bia", "Carlos"];
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
