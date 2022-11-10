const initialState = 0;
const amountReducer = (state = initialState, action) => {
  if (action.type === "deposite") {
    return state + action.payload;
  } else if (action.type === "widthdraw") {
    return state - action.payload;
  } else {
    return state;
  }
};

export default amountReducer;
