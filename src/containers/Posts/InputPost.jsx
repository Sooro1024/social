import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { commentCreate } from '../../store/user/action'

export const InputPost = () => {
  // console.log("InputPost.jsx")
  const [comment, setComent] = useState('')
  const dispatch = useDispatch()

  const handelInput = (ev) => {
    setComent(ev.target.value)
  }
  const handelCommentSubmit = (ev) => {
    ev.preventDefault()
    if (comment) {
      dispatch(commentCreate(comment))
    }
    setComent('')
  }
   
  return (
    <div>
      <form onSubmit={handelCommentSubmit} className="formInput">
        <input
          value={comment}
          type="text"
          onChange={handelInput}
          className="postInput"
          placeholder="Post"
        />
      </form>
    </div>
  )
}
