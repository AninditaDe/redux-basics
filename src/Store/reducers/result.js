import * as actionType from "../action/actions";
const initialState = {
  results: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
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
