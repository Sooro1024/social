export const allLikesSelector = state => {
  //  console.log(state)
 return state.userReducer.allLikes}
export const allPostsSelector = (state => state.userReducer.allPosts)
export const isAuthSelector = (state) => {
 
  return state.userReducer.isAuth
};

export const userSelector = (state) => state.userReducer.user;

export const postsSelector = (state) => state.userReducer.posts;

export const postLoadingSelector = (state) => state.userReducer.postsPending;

export const state = (state) => { console.log(state) };

export const likeSelector = (state) => state.userReducer.like
export const descriptionSelector = (state) => state.userReducer.description