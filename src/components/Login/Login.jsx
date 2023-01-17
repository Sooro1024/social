import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import './Login.scss'
import home2 from './home2.png'

export const Login = ({ onSubmit, onCancel, submitText, cancelText }) => {
  // console.log("Login.jsx")
  const [form, setForm] = useState({ userName: '', password: '' })

  return (
    <div className="login_img">
      <div className="image1"></div>

      <div className="image2">
        <div className="div-img2">
          <img
            src={home2}
            alt="444"
            style={{ width: '50%', height: 'auto', margin: '10px' }}
          />
          <form
            onSubmit={(ev) => {
              ev.preventDefault()
              onSubmit(form)
            }}
            className="login-form form-form"
          >
            <TextField
              value={form.userName}
              onChange={(ev) =>
                setForm((prevState) => ({
                  ...prevState,
                  userName: ev.target.value,
                }))
              }
              label="User name"
              type="text"
              className="textField"
            />
            <TextField
              value={form.password}
              onChange={(ev) =>
                setForm((prevState) => ({
                  ...prevState,
                  password: ev.target.value,
                }))
              }
              label="Password"
              type="password"
              className="textField"
            />
            <div className="actions">
              <Button type="button" color="inherit" onClick={onCancel}>
                {cancelText}
              </Button>
              <Button type="submit" color="primary" variant="contained">
                {submitText}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// import home2 from './home2.png'
// const posts = [{createdAt:'2023-01-13T05:59:31.663Z', author:{username:"AAAAAA"}, _id:"jkjskd44", message:"aaaa, skld;lk;  iii" }]
//  const Posts = () => {
//   return (
//     <div className="postsStyle">
//       {posts.map((el, index) => (
//         <div key={index} className="post-style">
//           <div className="comment-data">
//             <span>
//               <span>{el.createdAt}</span>
//             </span>
//             <span>{el.author.username}</span>
//             <img
//               src={home2}
//               alt="777"
//               style={{ width: '3%', height: 'auto', margin: '10px' }}
//             />
//           </div>
//           <div className="comment-content">
//             <p key={el._id}>{el.message}</p>
//           </div>
//           <div className="comment-tools">
//             <button>Like</button>
//             <button>Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default  Posts