const initialState = {
  products: [],
  auction: [],
  product: [],
  singleAuction: [],
  notFound: "",
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_SUCCESS":
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
    case "AUCTION_PRODUCT":
      state = {
        ...state,
        product: action.payload.product,
        auction: action.payload.auction,
      };
      break;
    case "BID_ADDED":
      state = {
        ...state,
        auction: action.payload.auction,
      };
      break;
    case "AUCTION_AFTER_END":
      state = {
        ...state,
        singleAuction: action.payload.auction,
      };
      break;
  }
  return state;
};
