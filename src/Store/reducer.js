import * as actionType from "./action/actions";
const initialState = {
  counter: 0,
  results: [],
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
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case actionType.DELETE_RESULT:
      //one way is to delete an item from an array immutably is copy that original array into a newaaray and then apply splice
      //   const updatedArray = [...state.results];
      //   updatedArray.splice(id, 1);// we need to pass the id
      //another way is filter method
      const updatedArray = [...state.results].filter(
        (result, index) => result.id !== action.strElId
      );
      return {
        ...state,
        results: updatedArray,
      };
  }
  return state;
};
export default rootReducer;
