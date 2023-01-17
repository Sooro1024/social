import { AUTH, SIGN_IN, SIGN_OUT, SIGN_UP, GET_POSTS, CREATE_POSTS, LIKE, DELETE_COMMENT, DESCRIPTION, USER_DATA } from "./types";

const initialState = {
  isAuth: null,
  user: null,
  posts: [],
  postsPending: false,
  like: 0,
  allLikes: 0,
  allPosts: 0,
  description: 'Description'
};

const reducer = (state = initialState, { type, payload }) => {
  // console.log("reducer")
  switch (type) {
    case SIGN_UP.SUCCESS:
    case SIGN_IN.SUCCESS:
    case USER_DATA.SUCCESS:
    case AUTH.SUCCESS:
      return { ...state, isAuth: true, user: payload, allLikes: payload.likes, allPosts: payload.posts };
    case CREATE_POSTS.SUCCESS:
      return { ...state, posts: [payload, ...state.posts], allPosts: (state.posts.length + 1) };
    case GET_POSTS.SUCCESS:
      return { ...state, posts: payload };
    case GET_POSTS.PENDING:
      return { ...state, postsPending: payload };
    case SIGN_OUT.SUCCESS:
    case AUTH.ERROR:
    case AUTH.NOT_AUTH:
      return { ...state, isAuth: false, user: null };
    case DELETE_COMMENT.SUCCESS:
      const newState = state.posts.filter(el => el._id !== payload)
      const deletElement = state.posts.filter(el => el._id === payload)
      return {
        ...state, posts: newState, allPosts: newState.length, allLikes: (state.allLikes - deletElement[0].likes)
      }
    case LIKE.SUCCESS:
      const newLikeState = state.posts.map((el, index) => {
        console.log(payload.like)
        if (el._id === payload.id) {
          return { ...el, likes: payload.like }
        }
        return el
      })
      return {
        ...state, posts: newLikeState, allLikes: (state.allLikes + (payload.like ? 1 : -1))
      }
    case DESCRIPTION.SUCCESS:
      return {
        ...state,
        user: {
          ...state.user, description: payload.updatedUser.description
        }
      }

    default:
      return state;
  }
};
export default reducer;
