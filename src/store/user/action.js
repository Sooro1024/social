import { SIGN_IN, AUTH, SIGN_UP, SIGN_OUT, GET_POSTS } from "./types";

export const notAuthenticatedAction = { type: AUTH.NOT_AUTH };

/**
 * @param {string} token
 * @returns {(dispatch: any, getState: any, { networkProvider }: {networkProvider: import('axios').Axios}) => {}}
 */
export const authAction =
  (token) =>
  async (dispatch, getState, { networkProvider }) => {
    try {
      dispatch({ type: AUTH.PENDING, payload: true });
      const { data } = await networkProvider.get("/api/auth/token", {
        headers: {
          authToken: token,
        },
      });
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
    try {
      dispatch({ type: SIGN_IN.PENDING, payload: true });
      const {
        data: { response },
      } = await networkProvider.post("/api/auth/sign-in", {
        username: userName,
        password: password,
      });
      localStorage.setItem("token", response.token);
      dispatch({ type: SIGN_IN.SUCCESS, payload: response });
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
    try {
      dispatch({ type: SIGN_UP.PENDING, payload: true });
      const {
        data: { response },
      } = await networkProvider.post("/api/auth/sign-up", {
        username: userName,
        password: password,
      });
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
    try {
      dispatch({ type: GET_POSTS.PENDING, payload: true });
      const username = getState().userReducer.user.username;
      const {
        data: { response },
      } = await networkProvider.get(`/api/user/${username}/posts`, {
        params: {
          offset: 0,
          quantity: 5,
        },
      });

      console.log(response);

      dispatch({ type: GET_POSTS.SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: GET_POSTS.ERROR });
    } finally {
      dispatch({ type: GET_POSTS.PENDING, payload: false });
    }
  };
