import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AppBar, Button, Toolbar } from '@mui/material'
import { signOutAction } from '../../store/user/action'

export const Navigation = () => {
  // console.log("Novigation.jsx")
  const dispatch = useDispatch()

  const handleLogOut = useCallback(() => {
    dispatch(signOutAction())
  }, [dispatch])

  return (
    <Button variant="contained" color="error" onClick={handleLogOut}>
      Sing Out
    </Button>
  )
}
