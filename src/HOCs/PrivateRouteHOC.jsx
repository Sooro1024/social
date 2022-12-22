import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isAuthSelector } from "../store/user/selector";

export function PrivateRoute({ children, ...rest }) {
  const isAuth = useSelector(isAuthSelector);

  if (isAuth !== true) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: rest.path },
        }}
      />
    );
  }
  return <Route {...rest}>{children}</Route>;
}
