import React, { useEffect, useState } from 'react'
import imgNoImg from '../../assets/user.png'
import { Preloader } from '../Preloader'
import { NavLink } from 'react-router-dom'
import { getUsers, userFollow, userUnfollow } from '../../redux/thunks/usersThunk'
import { PagesSort } from './PagesSort/PagesSort'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { PagesCount } from './PagesCount/PagesCount'
import { UsersSearch } from './UsersSearch/UsersSearch'
import { setPageNum } from '../../redux/actions'
import { TextField, RadioGroup, Box, Card, CardMedia, Button, FormControl, Typography, CardActions, CardContent } from '@mui/material';

export const Users: React.FC = () => {

  const { users, isFollowBtnFetching, isFetching, pageNum, usersPortion, userSearch, isUserFriend } = useAppSelector(state => state.usersReducer)

  const dispatch = useAppDispatch()

  console.count('render');
  

  const [searchReady, setSearchReady] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      const scrollPercent = Math.trunc(window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100)
      scrollPercent > 97 ? setSearchReady(true) : setSearchReady(false)
    }, 100)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers(usersPortion, pageNum, userSearch, isUserFriend))
      dispatch(setPageNum(pageNum + 1))
    }
  }, [])

  useEffect(() => {
    if (searchReady && !isFetching) {
      dispatch(getUsers(usersPortion, pageNum, userSearch, isUserFriend))
      dispatch(setPageNum(pageNum + 1))
    }
  }, [searchReady])

  return (
    <Box display='flex' sx={{ alignItems: 'flex-start' }}>
      <Box sx={{ mt: 2, width: 600 }}>{users.map(u =>
        <Card key={u.id} sx={{ display: 'flex', m: 1, p: 1 }} >
          <NavLink to={'/profile/' + u.id} >
            <CardMedia height='130' component='img' src={u.photos.large === null ? imgNoImg : u.photos.large} />
          </NavLink>
          <Box display='flex' sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent>
              <Typography sx={{ flexGrow: 1 }}>{u.name}</Typography>
              <Typography>{u.status}</Typography>
            </CardContent>
            <CardActions >
              <Button variant='outlined' disabled={isFollowBtnFetching.some(id => id === u.id)} onClick={() => { !u.followed ? dispatch(userFollow(u.id)) : dispatch(userUnfollow(u.id)) }}>
                {!u.followed ? 'follow' : 'unfollow'} {isFollowBtnFetching.some(id => id === u.id) ? <Preloader size={12} color='#000' speed={0.8} /> : null}</Button>
              <Button>Send message</Button>
            </CardActions>
          </Box>
        </Card>
      )}
      </Box>
      <UsersSearch />
    </Box >
  )
}