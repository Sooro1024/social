import { useDispatch } from 'react-redux'
import { actionAddLike } from '../store/user/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Like = ({ id, message, qty, likes, number }) => {
  // console.log("Like.jsx")
  const dispatch = useDispatch()
  const handelAddLike = (ev) => {
    dispatch(actionAddLike(likes, id, number))
  }
  return (
    <div>
      {likes}
      <FontAwesomeIcon name={id} icon={faHeart} onClick={handelAddLike}  className="like-button"/>
    </div>
  )
}
