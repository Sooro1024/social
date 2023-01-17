import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetUser, actionSaveDeascription } from '../store/user/action'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { allLikesSelector, allPostsSelector, userSelector } from '../store/user/selector'

export const Description = () => {
  // console.log("Description")
  const dispach = useDispatch()
  const user = useSelector(userSelector)

  const allLikes = useSelector(allLikesSelector)
  const allPosts = useSelector(allPostsSelector)
  // console.log(allLikes)
  const [description, setDescription] = useState('')
  const [open, setOpen] = useState(false)

  // console.log(state)
  const handelChangeDescription = (ev) => {
    setDescription((prevSate) => ev.target.value)
    // console.log(description)
  }
  const handelDesSubmit = (ev) => {
    ev.preventDefault()
    dispach(actionSaveDeascription(description))
    // setDescription('')
    setOpen(false)
  }
  const descriptionOpen = () => {
    setDescription(user.description)
    setOpen(true)
  }

  return (
    <>
      <div className="qty">
        <span>{allPosts} posts</span> <span>{allLikes} likes</span>
      </div>
      <div className="description">
        <div className={open ? 'desHidden' : 'desVisible'}>
          {user.description}
        </div>
        <form onSubmit={handelDesSubmit}>
          <input
            type={open ? 'text' : 'hidden'}
            value={description}
            onChange={handelChangeDescription}
            className="des-input"
            // placeholder={user.description}
          />
        </form>
        <FontAwesomeIcon
          icon={faEdit}
          onClick={descriptionOpen}
          className="description-button"
        />
      </div>
    </>
  )
}
