import React, { useEffect } from 'react'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

import { Routes, Route } from 'react-router-dom'
import { Users } from './components/Users/Users'
import { Login } from './components/Login/Login'
import { getAuth } from './redux/thunks/authThunk'
import { Settings } from './components/Setttings/Settings'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { Chat } from './components/Chat/Chat'
import Messages from './components/Dialogs/Messages/Messages'
import { Layout } from './components/Layout/Layout'
import { Box } from '@mui/material'

const App = () => {
  const { isAuth } = useAppSelector(state => state.authReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAuth())
  }, [isAuth, dispatch])

  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path='profile' element={<Profile />} />
          <Route path='profile/:paramsUserID' element={<Profile />} />
          <Route path='login' element={<Login />} />
          <Route path='messages' element={<Dialogs />} />
          <Route path='messages/:sendUserId' element={<Messages />} />
          <Route path='users' element={<Users />} />
          <Route path='settings' element={<Settings />} />
          <Route path='chat' element={<Chat />} />
        </Route>
      </Routes>
    </Box>
  )
}

export { App }