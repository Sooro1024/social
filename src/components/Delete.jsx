import React from 'react'
import { useDispatch } from 'react-redux'
import { actionDeleteComment } from '../store/user/action'

export const Delete = ({id}) => {
  // console.log("Delete.jsx")
   const dispatch =  useDispatch()
    const handelDelete = (ev)=>
    {
            ev.preventDefault()

        dispatch(actionDeleteComment(id))
    }
  return (
    <div onClick={handelDelete} className="delete-button">&times;</div>
  )
}
