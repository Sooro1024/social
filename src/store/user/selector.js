export const isAuthSelector = (state) => state.userReducer.isAuth;

export const userSelector = (state) => state.userReducer.user;

export const postsSelector = (state) => state.userReducer.posts;

export const postLoadingSelector = (state) => state.userReducer.postsPending;
