const initState = {
  name: "",
  email: "",
  role: "",
  id: "",
  error: "",
  token: null,

  auth: false,
  user: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      state = {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
        email: action.payload.email,
        id: action.payload.id,
        role: action.payload.role,
        auth: true,
      };

      break;
    case "LOGIN_FAILURE":
      state = {
        ...state,
        error: action.payload.error,
      };

      break;
    case "GET_USER":
      state = {
        ...state,
        user: action.payload.user,
      };

      break;
  }

  return state;
};
