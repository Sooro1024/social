import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postsSelector, postLoadingSelector } from '../../store/user/selector'
import { CircularProgress } from '@mui/material'
import { getPostsAction } from '../../store/user/action'
import { Like } from '../../components/Like'
import { Delete } from '../../components/Delete'
import { Data } from '../../components/Date'
import avatar_default_0 from '../../components/HomePage/avatar_default_0.png'

import { Link } from 'react-router-dom'

export const Posts = () => {
  // console.log("Posts.jsx")
  const dispatch = useDispatch()

  const posts = useSelector(postsSelector)
  const postLoading = useSelector(postLoadingSelector)

  useEffect(() => {
    dispatch(getPostsAction())
  }, [dispatch])

  if (postLoading) {
    return <CircularProgress />
  }
  // console.log(posts)
  return (
    <div className="postsStyle">
      {posts.map((el, index) => (
        <div key={index} className="post-style">
          <div className="comment-data">
            <Data createDate={el.createdAt} />

            <div className="comment-data_2">
              <span>
                <Link to="/home">{el.author.username}</Link>
              </span>
              <img src={avatar_default_0} alt="777" align="top" />
            </div>
          </div>

          <div className="comment-content">
            <p key={el._id}>{el.message}</p>
          </div>
          <div className="comment-tools">
            <Like
              id={el._id}
              message={el.message}
              number={index}
              likes={el.likes}
              key={el._id}
            />
            <Delete id={el._id} />
          </div>
        </div>
      ))}
    </div>
  )
}
