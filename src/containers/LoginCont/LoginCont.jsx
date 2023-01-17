import React, { useCallback } from 'react'
import { Login } from '../../components/Login/Login'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signInAction } from '../../store/user/action'

const LoginCont = () => {
  const dispatch = useDispatch()

  const history = useHistory()

  const handleSubmit = useCallback(
    (form) => {
      dispatch(signInAction(form, history))
    },
    [dispatch, history],
  )

  const handleCancel = useCallback(() => {
    history.push('/sign-up')
  }, [history])

  return (
    <div>
      <Login
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitText="Log In"
        cancelText="Sign up"
      />
    </div>
  )
}

export default LoginCont
