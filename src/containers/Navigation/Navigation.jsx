import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AppBar, Button, Toolbar } from "@mui/material";
import { signOutAction } from "../../store/user/action";

export const Navigation = () => {
  const dispatch = useDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(signOutAction());
  }, [dispatch]);

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Button variant="contained" color="error" onClick={handleLogOut}>
          Sing Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};
