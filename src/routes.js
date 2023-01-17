import HomeCont from "./containers/Home/HomeCont";
import LoginCont from "./containers/LoginCont/LoginCont";
import SignUpCont from "./containers/SignUpCont/SignUpCont";
// console.log("route.jsx")
/**
 * @type {(import('react-router-dom').RouteProps)[]}
 */
export const PUBLIC_ROUTES = [
  {
    component: LoginCont,
    path: "/login",
    exact: true,
  },
  {
    component: SignUpCont,
    path: "/sign-up",
    exact: true,
  },
];
export const PRIVATE_ROUTES = [
  {
    component: HomeCont,
    path: "/",
    exact: true,
  },
  {
    component: () => { window.location.href = 'https://github.com/' },
    path: "/github",
    exact: true,
  }
];
