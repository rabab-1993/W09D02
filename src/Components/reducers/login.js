const initialState = {
  user: null,
  token: "",
};

const signIn = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      const { user, token } = payload;
      localStorage.setItem("token", token);
      localStorage.setItem("id", user._id);
      console.log(user);
      return { user, token };
    case "LOGOUT":
      localStorage.clear();
      return payload;
    default:
      return state;
  }
};

export default signIn;

export const logIn = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const logOut = (data) => {
  return {
    type: "LOGOUT",
    payload: data,
  };
};
