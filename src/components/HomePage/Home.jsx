import React from 'react'
import { Description } from '../Description'
import avatar_default_0 from './avatar_default_0.png'

export const Home = ({ user }) => {
  return (
    <div className="home-user">
      <div className="home-user_1">
        <div className="div2">
          <img src={avatar_default_0} alt="777" style={{ width: '200px' }} />
        </div>
        <div className="div1">{user.username}</div>
        <div style={{ display: 'grid' }}>
          <Description />
        </div>
      </div>
    </div>
  )
}
