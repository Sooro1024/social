import { SIGN_IN, AUTH, SIGN_UP, SIGN_OUT, GET_POSTS, CREATE_POSTS, LIKE, DELETE_COMMENT, DESCRIPTION, USER_DATA } from "./types";

export const notAuthenticatedAction = { type: AUTH.NOT_AUTH };

/**
 * @param {string} token
 * @returns {(dispatch: any, getState: any, { networkProvider }: {networkProvider: import('axios').Axios}) => {}}
 */
export const authAction =
  (token) =>
    async (dispatch, getState, { networkProvider }) => {
      console.log("authAction")
      try {
        dispatch({ type: AUTH.PENDING, payload: true });
        const { data } = await networkProvider.get("/api/auth/token", {
          headers: {
            authToken: token,
          },
        });
        // console.log(data)
        dispatch({ type: AUTH.SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: AUTH.ERROR });
      } finally {
        dispatch({ type: AUTH.PENDING, payload: false });
      }
    };

export const signInAction =
  ({ userName, password }, history) =>
    async (dispatch, getState, { networkProvider }) => {
      console.log("signInAction")
      try {
        dispatch({ type: SIGN_IN.PENDING, payload: true });
        const {
          data: { response },
        } = await networkProvider.post("/api/auth/sign-in", {
          username: userName,
          password: password,
        });
        // console.log(response)
        localStorage.setItem("token", response.token);
        dispatch({ type: SIGN_IN.SUCCESS, payload: response });
        // console.log(response)
        history.push("/");
      } catch (error) {
        dispatch({ type: SIGN_IN.ERROR });
      } finally {
        dispatch({ type: SIGN_IN.PENDING, payload: false });
      }
    };

/**
 * @param {{userName: string, password: string}} form-data
 * @returns {(dispatch: any, getState: any, { networkProvider }: {networkProvider: import('axios').Axios}) => {}}
 */

export const signUpAction =
  ({ userName, password }, history) =>
    async (dispatch, getState, { networkProvider }) => {
      console.log("signUpAction")
      try {
        dispatch({ type: SIGN_UP.PENDING, payload: true });
        const {
          data: { response },
        } = await networkProvider.post("/api/auth/sign-up", {
          username: userName,
          password: password,
        });
        // console.log(response)
        localStorage.setItem("token", response.token);
        dispatch({ type: SIGN_UP.SUCCESS, payload: response });
        history.push("/");
      } catch (error) {
        dispatch({ type: SIGN_UP.ERROR });
      } finally {
        dispatch({ type: SIGN_UP.PENDING, payload: false });
      }
    };

export const signOutAction = () => (dispatch) => {
  console.log("signOutAction")
  localStorage.removeItem("token");
  dispatch({ type: SIGN_OUT.SUCCESS });

};

/**
 * @param {{userName: string, password: string}} form-data
 * @returns {(dispatch: any, getState: any, { networkProvider }: {networkProvider: import('axios').Axios}) => {}}
 */
export const getPostsAction =
  () =>
    async (dispatch, getState, { networkProvider }) => {
      console.log("getPostsAction")
      try {
        dispatch({ type: GET_POSTS.PENDING, payload: true });
        const username = getState().userReducer.user.username;
        const {
          data: { response },
        } = await networkProvider.get(`/api/user/${username}/posts`, {
          params: {
            offset: 0,
            // quantity:5,
          },
        });

        // console.log(response);

        dispatch({ type: GET_POSTS.SUCCESS, payload: response });
      } catch (error) {
        dispatch({ type: GET_POSTS.ERROR });
      } finally {
        dispatch({ type: GET_POSTS.PENDING, payload: false });
      }
    };

// getPostsAction()
export const commentCreate =
  (comment) =>
    async (dispatch, getState, { networkProvider }) => {
      console.log("commentCreate")
      // console.log(comment)
      try {
        // dispatch({ type: CREATE_POSTS.CREATE_POSTS_PENDING, payload: true });
        const username = getState().userReducer.user.username;
        const {
          data: { response },
        } = await networkProvider.post(`/api/user/${username}/new/post`,
          {
            "message": comment,
            "username": username,
            "extra": {
              "value": "3",
              "extraType": "bbb"
            }
          }

        );

        dispatch({ type: CREATE_POSTS.SUCCESS, payload: response });
      } catch (error) {
        dispatch({ type: CREATE_POSTS.ERROR });
      } finally {
        dispatch({ type: CREATE_POSTS.PENDING, payload: false });
      }
    };



export const actionAddLike = (likes, postid, index) =>
  async (dispatch, getState, { networkProvider }) => {
    console.log("actionAddLike")


    try {

      if (likes === 0) {
        console.log("like")
        // console.log(postid)
        await networkProvider.post(`api/post/${postid}/like`

        );
        dispatch({
          type: LIKE.SUCCESS, payload: {
            index: index,
            like: 1,
            id: postid
          }
        });

      }
      if (likes === 1) {
        console.log("unlike")
        await networkProvider.post(`api/post/${postid}/unlike`,
        );
        dispatch({
          type: LIKE.SUCCESS, payload: {
            index: index,
            like: 0,
            id: postid
          }
        });
      }

    } catch (error) {
      console.log('catch')
      //  dispatch({ type: LIKE.ERROR });
    } finally {
      console.log('finaly')
      //  dispatch({ type: LIKE.PENDING, payload: false });
    }
  };


export const actionDeleteComment = (postId) => async (dispatch, getState, { networkProvider }) => {
  try {
    console.log("actionDeleteComment")
    await networkProvider.delete(`/api/post/${postId}`)
    dispatch({ type: DELETE_COMMENT.SUCCESS, payload: postId })
    // console.log(data)
  } catch (error) {
    console.log('Delete catch>>', error)
  } finally {
    console.log('Finaly>>')
  }
}



export const actionSaveDeascription = (description) => async (dispatch, getState, { networkProvider }) => {
  console.log("actionSaveDeascription")
  try {
    // console.log("action descriptoin", description)
    const {
      data: { response },
    } = await networkProvider.patch(`/api/user/settings/description`, {

      "description": description
    })

    // console.log(response)
    dispatch({ type: DESCRIPTION.SUCCESS, payload: response })

  } catch (error) {

    console.log('des catch>>', error)

  } finally {
    console.log('Finaly>>')
  }

}
export const actionGetUser = () =>
  async (dispatch, getState, { networkProvider }) => {
    console.log("actionGetUser")

    const username = getState().userReducer.user.username;

    try {
      const { data: { response } } = await networkProvider.get(`api/user/${username}`)


      // console.log(response)
      dispatch({ type: USER_DATA.SUCCESS, payload: response })
    } catch (error) {
      console.log(error)
    }
    finally { }
  }



