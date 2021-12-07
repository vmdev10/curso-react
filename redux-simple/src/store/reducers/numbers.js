const initialState = {
  min: 1,
  max: 10,
};

export default function (state = initialState, action) {
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
      return state;
  }
}
