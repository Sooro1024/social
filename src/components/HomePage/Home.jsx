import React from "react";

export const Home = ({ user }) => {
  return (
    <div>
      Home Page<div>{JSON.stringify(user)}</div>
    </div>
  );
};
