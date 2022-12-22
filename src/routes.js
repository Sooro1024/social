import HomeCont from "./containers/Home/HomeCont";

/**
 * @type {(import('react-router-dom').RouteProps)[]}
 */
export const PUBLIC_ROUTES = [
  // {
  //   component: LoginCont,
  //   path: "/login",
  //   exact: true,
  // },
  // {
  //   component: SignUpCont,
  //   path: "/sign-up",
  //   exact: true,
  // },
];
export const PRIVATE_ROUTES = [
  {
    component: HomeCont,
    path: "/",
    exact: true,
  },
];
