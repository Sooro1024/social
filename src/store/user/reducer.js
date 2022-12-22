import { AUTH, SIGN_IN, SIGN_OUT, SIGN_UP, GET_POSTS } from "./types";

const initialState = {
  isAuth: null,
  user: null,
  posts: [],
  postsPending: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP.SUCCESS:
    case SIGN_IN.SUCCESS:
    case AUTH.SUCCESS:
      return { ...state, isAuth: true, user: payload };
    case GET_POSTS.SUCCESS:
      return { ...state, posts: payload };
    case GET_POSTS.PENDING:
      return { ...state, postsPending: payload };

    case SIGN_OUT.SUCCESS:
    case AUTH.ERROR:
    case AUTH.NOT_AUTH:
      return { ...state, isAuth: false, user: null };

    default:
      return state;
  }
};

export default reducer;
