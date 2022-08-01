import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

import style from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import { Users } from './components/Users/Users'
import Login from './components/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth } from './redux/thunks/authThunk'
import Preloader from './components/Preloader'
import { Settings } from './components/Setttings/Settings'

function App() {
  const isAuth = useSelector(state => state.authReducer.isAuth)
  const errorAuth = useSelector(state => state.authReducer.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAuth())
  }, [isAuth, dispatch])

  if (!isAuth && !errorAuth) {
    return <Preloader size='30' color='#000000' />
  }

  return (
    <div className={style.wrapper}>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Profile />}>
          <Route path='profile' element={<Profile />}>
            <Route path=':userID' element={<Profile />} />
          </Route>
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='messages' element={<Dialogs />} />
        <Route path='users' element={<Users />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
    </div>
  )
}
export default App