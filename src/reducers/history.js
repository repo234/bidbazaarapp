const initState = {
  bidHistory: [],
  getBidHistory: [],
  unpaid: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case "BIDHISTORY_SUCCESS":
      state = {
        ...state,
        bidHistory: action.payload.bidHistory,
      };
      break;
    case "GETBIDHISTORY_SUCCESS":
      state = {
        ...state,
        getBidHistory: action.payload.getbidHistory,
      };
      break;
    case "UNPAIDPRODUCTS_SUCCESS":
      state = {
        ...state,
        unpaid: action.payload.unpaid,
      };
      break;
  }
  return state;
};
