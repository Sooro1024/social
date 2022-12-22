import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import axios from "axios";
import userReducer from "./user/reducer";
import { SIGN_OUT } from "./user/types";

const reducers = combineReducers({
  userReducer,
});

const networkProvider = axios.create({
  baseURL: "https://react120.herokuapp.com",
});

// Add a request interceptor
networkProvider.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = { ...config.headers, authToken: token };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
networkProvider.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.status === 403) {
      store.dispatch({ type: SIGN_OUT.SUCCESS });
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ networkProvider }))
  )
);
