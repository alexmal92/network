import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";

function Navbar() {
  const styleLink = linkData => linkData.isActive ? style.active : style.link
  return (
    <nav className={style.navbar}>
      <div className={style.links}>
        <NavLink className={styleLink} to='/messages'>Messages</NavLink>
        <NavLink className={styleLink} to='/profile'>Profile</NavLink>
        <NavLink className={styleLink} to='/users'>Users</NavLink>
        <NavLink className={styleLink} to='/settings'>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar