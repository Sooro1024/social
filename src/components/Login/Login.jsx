import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./Login.scss";

export const Login = ({ onSubmit, onCancel, submitText, cancelText }) => {
  const [form, setForm] = useState({ userName: "", password: "" });

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(form);
      }}
      className="login-form"
    >
      <TextField
        value={form.userName}
        onChange={(ev) =>
          setForm((prevState) => ({ ...prevState, userName: ev.target.value }))
        }
        label="User name"
        type="text"
      />
      <TextField
        value={form.password}
        onChange={(ev) =>
          setForm((prevState) => ({ ...prevState, password: ev.target.value }))
        }
        label="Password"
        type="password"
      />
      <div className="actions">
        <Button type="button" color="inherit" onClick={onCancel}>
          {cancelText}
        </Button>
        <Button type="submit" color="primary" variant="contained">
          {submitText}
        </Button>
      </div>
    </form>
  );
};
