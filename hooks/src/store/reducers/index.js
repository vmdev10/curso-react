// A partir da 'action'(ação) que foi gerada, eu sei como vou atualizar o meu estado(state) para o novo estado da aplicação
// Toda ação tem um tipo, que é onde saberei onde vou alterar o meu estado
export function reducer(state, action) {
  switch (action.type) {
    case "add2":
      return {
        ...state,
        number: state.number + 2,
      };

    case "multiply7":
      return {
        ...state,
        number: state.number * 7,
      };

    case "divide25":
      return {
        ...state,
        number: state.number / 25,
      };

    case "parseInt":
      return {
        ...state,
        number: parseInt(state.number),
      };
    case "addN":
      return {
        ...state,
        number: state.number + action.playload,
      };

    case "login":
      return {
        ...state,
        user: { name: action.payload },
      };
    default:
      return state;
  }
}
