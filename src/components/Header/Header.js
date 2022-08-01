import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import logo from '../../assets/logo.png'
import { logout } from '../../redux/thunks/authThunk'
import Preloader from '../Preloader'

function Header() {
    const userAuth = useSelector(state => state.authReducer.data)
    const isAuth = useSelector(state => state.authReducer.isAuth)

    const dispatch = useDispatch()
    // console.log(userAuth);
    // useEffect(() => {
    //     console.log();
    //     dispatch(getAuth())
    // }, [isAuth])

    return (
        <div className={style.header}>
            <img className={style.logo} src={logo} alt={''} />
            <div>
                {isAuth
                    ?
                    <div>{userAuth.login}
                        <button onClick={() => dispatch(logout())}>logout</button>
                    </div>
                    :
                    <NavLink to={'/login'}> <Preloader size='10' />Login</NavLink>}
            </div>
        </div>
    )
}

export default Header