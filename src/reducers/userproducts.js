const initialState = {
  activeproducts: [],
  product: [],
  inactivePro: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "AUCTION_PRODUCT_SUCCESS":
      state = {
        ...state,
        activeproducts: action.payload.products,
      };

      break;
    case "INACTIVE_PRODUCT_SUCCESS":
      state = {
        ...state,
        inactivePro: action.payload.inacproducts,
      };
      break;
    case "SINGLE_PRODUCT_SUCCESS":
      state = {
        ...state,
        product: action.payload.product,
      };
      break;
    case "SINGLE_PRODUCT_FAILURE":
      state = {
        ...state,
        error: action.payload.error,
      };
  }
  return state;
};
