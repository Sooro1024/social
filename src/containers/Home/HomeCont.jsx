import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Home } from '../../components/HomePage/Home'
import { actionGetUser } from '../../store/user/action'
import { userSelector } from '../../store/user/selector'
import { Navigation } from '../Navigation/Navigation'
import { InputPost } from '../Posts/InputPost'
import { Posts } from '../Posts/Posts'
import { FaGithub } from "react-icons/fa";



const HomeCont = () => {
  // console.log("HomeCont.jsx")
  const user = useSelector(userSelector)
  // console.log(user.posts)
  // console.log(user)
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionGetUser())
  }, [dispatch])

  return (
    <>
      <div className="home-page">
        <Home user={user} />
        <div className="home-content">
          <div className="div3">
            <InputPost />
            <Posts />
          </div>
        </div>
        <div className="home-tools">
          <Navigation />
          <NavLink to='/github' target='_blank' className='github'><h1><FaGithub /></h1></NavLink>

        </div>
      </div>
    </>
  )
}

export default HomeCont


