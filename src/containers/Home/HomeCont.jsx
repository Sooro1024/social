import React from "react";
import { useSelector } from "react-redux";
import { Home } from "../../components/HomePage/Home";
import { userSelector } from "../../store/user/selector";
import { Posts } from "../Posts/Posts";

const HomeCont = () => {
  const user = useSelector(userSelector);

  return (
    <>
      <div>
        HomeCont <Home user={user} />
      </div>
      <Posts />
    </>
  );
};

export default HomeCont;
