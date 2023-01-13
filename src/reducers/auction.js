const initState = {
  auction: [],
  auctionproduct: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case "AUCTION_PRODUCT":
      state = {
        ...state,
        auction: action.payload.auction,
        auctionproduct: action.payload.product,
      };
      break;
  }
  return state;
};
