const initState = {
  error: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_FAILED":
      console.log("LOGIN FAILED");
      return {
        ...state,
        error: "Login Failed"
      };
    case "LOGIN_SUCCESS":
      console.log("LOGIN SUCCESS", state);
      return {
        ...state,
        error: null
      };
    case "LOGOUT_SUCCESS":
      console.log("LOGOUT SUCCESS");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("SIGNUP SUCCESS");
      return {
        ...state,
        error: null
      };
    case "SIGNUP_ERROR":
      console.log("SIGNUP ERROR", action.err.message);
      return {
        ...state,
        error: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
