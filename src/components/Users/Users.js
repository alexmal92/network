import React, { useEffect, useState } from 'react'
import style from './Users.module.css'
import { useDispatch, useSelector } from 'react-redux'
import imgNoImg from '../../assets/user.png'
import Preloader from '../Preloader'
import { NavLink } from 'react-router-dom'
import { getUsers, userFollow, userUnfollow } from '../../redux/thunks/usersThunk'
import { PagesCount } from './PagesCount/PagesCount'
import { PagesSort } from './PagesSort/PagesSort'

export function Users() {
  const users = useSelector(state => state.usersReducer.users)
  const isFollowBtnFetching = useSelector(state => state.usersReducer.isFollowBtnFetching)
  const isFetching = useSelector(state => state.usersReducer.isFetching)

  //Текущий номер страницы
  const currentPage = useSelector(state => state.usersReducer.currentPage)

  const dispatch = useDispatch()

  //кол-во пользователей на странице
  const [onPageUsersCount, setOnPageUsersCount] = useState(15)

  useEffect(() => {
    dispatch(getUsers(onPageUsersCount, currentPage))
  }, [currentPage, onPageUsersCount, dispatch])

  return (
    <div className={style.wrapper}>
      <div className={style.filter}>
        <PagesCount pageNum={currentPage} onPageUsersCount={onPageUsersCount} />
        {isFetching ? <Preloader size='22' color='#000' speed='0.8' /> : null}
        <PagesSort onPageUsersCount={onPageUsersCount} setOnPageUsersCount={setOnPageUsersCount} />
      </div>
      <div className={style.wrapperUsers}>{users.map(u =>
        <div className={style.user} key={u.id}>
          <div>{u.name}</div>
          <NavLink to={'/profile/' + u.id}>
            <img className={style.img} src={u.photos.small != null ? u.photos.small : imgNoImg} alt='' />
          </NavLink>
          <button disabled={isFollowBtnFetching.some(id => id === u.id)} className={style.button} onClick={() => { !u.followed ? dispatch(userFollow(u.id)) : dispatch(userUnfollow(u.id)) }}>
            {!u.followed ? 'follow' : 'unfollow'} {isFollowBtnFetching.some(id => id === u.id) ? <Preloader size='12' color='#000' speed='0.8' /> : null}</button>
        </div>
      )}
      </div>
      <div className={style.filter}>
        <PagesCount pageNum={currentPage} onPageUsersCount={onPageUsersCount} />
      </div>
    </div >
  )
}