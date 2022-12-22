import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsSelector, postLoadingSelector } from "../../store/user/selector";
import { CircularProgress } from "@mui/material";
import { getPostsAction } from "../../store/user/action";

export const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector(postsSelector);
  const postLoading = useSelector(postLoadingSelector);

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  if (postLoading) {
    return <CircularProgress />;
  }
  return (
    <div>
      {posts.map((el, index) => (
        <p key={index}>{el.message}</p>
      ))}
    </div>
  );
};
