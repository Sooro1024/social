import React, { useCallback } from "react";
import { Login } from "../../components/Login/Login";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../store/user/action";

const SignUpCont = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = useCallback(
    (form) => {
      dispatch(signUpAction(form), history);
    },
    [dispatch, history]
  );

  const handleCancel = useCallback(() => {
    history.push("/login");
  }, [history]);

  return (
    <div>
      <Login
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitText="Sign Up"
        cancelText="Back to log in"
      />
    </div>
  );
};

export default SignUpCont;
