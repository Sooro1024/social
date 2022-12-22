import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "./routes";
import { PrivateRoute } from "./HOCs/PrivateRouteHOC";
import { useEffect } from "react";
import { isAuthSelector } from "./store/user/selector";
import { authAction, notAuthenticatedAction } from "./store/user/action";
import LoginCont from "./containers/LoginCont/LoginCont";
import SignUpCont from "./containers/SignUpCont/SignUpCont";
import { Navigation } from "./containers/Navigation/Navigation";

function App() {
  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth === null) {
      if (localStorage.getItem("token") !== null) {
        dispatch(authAction(localStorage.getItem("token")));
      } else {
        dispatch(notAuthenticatedAction);
      }
    }
  }, [isAuth, dispatch]);

  if (isAuth === null) {
    return <CircularProgress />;
  }

  return (
    <BrowserRouter>
      {isAuth === true && <Navigation />}
      <Switch>
        {PUBLIC_ROUTES.map((props, inx) => (
          <Route {...props} key={inx} />
        ))}
        {PRIVATE_ROUTES.map((props, inx) => (
          <PrivateRoute {...props} key={inx} />
        ))}

        {isAuth === false && (
          <>
            <Route exact path={"/login"} component={LoginCont} />
            <Route exact path={"/sign-up"} component={SignUpCont} />
          </>
        )}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
