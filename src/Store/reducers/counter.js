import * as actionType from "../action/actions";
const initialState = {
  counter: 0,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionType.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case actionType.ADD:
      return { ...state, counter: state.counter + action.value };
    case actionType.SUBTRACT:
      return { ...state, counter: state.counter - action.value };
  }
  return state;
};
export default rootReducer;
