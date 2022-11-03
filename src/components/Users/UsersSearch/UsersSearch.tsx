import React, { FC, ChangeEvent, useRef, useLayoutEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { clearUsers, setIsUserFriend, setPageNum, setUserSearch } from '../../../redux/actions'
import { getUsers } from '../../../redux/thunks/usersThunk'
import { TextField, RadioGroup, Box, FormControlLabel, Radio, FormControl, FormLabel, Divider } from '@mui/material';

// let scrollPercent = Math.trunc(window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100)

export const UsersSearch: FC = () => {

  const { pageNum, usersPortion, userSearch, isUserFriend } = useAppSelector(state => state.usersReducer)
  const firstUpdate = useRef(true)
  const nullValue = ''
  const dispatch = useAppDispatch()

  const searchFn = () => {
    dispatch(clearUsers([]))
    dispatch(setPageNum(pageNum + 1))
    dispatch(getUsers(usersPortion, pageNum, userSearch, isUserFriend))
  }

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    const delayDebounceFn = setTimeout(searchFn, 1000)
    return () => clearTimeout(delayDebounceFn)
  }, [userSearch, isUserFriend])

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (pageNum > 1) {
      dispatch(setPageNum(1))
    }
    dispatch(setUserSearch(e.target.value))
  }

  const onChangeFriend = (e: ChangeEvent<HTMLInputElement>) => {
    if (pageNum > 1) {
      dispatch(setPageNum(1))
    }
    dispatch(setIsUserFriend(e.target.value))
  }

  return (
    <Box display='flex' sx={{ position: 'sticky', top: '0' }}>
      <Divider flexItem orientation='vertical' variant='middle' sx={{ m: 2 }} />
      <Box component='form' sx={{ mt: 2 }}>
        <FormControl>
          <FormLabel id="userNameSearch">Search name</FormLabel>
          <TextField
            id='userNameSearch'
            type='text'
            value={userSearch}
            onChange={onChangeSearch}
            sx={{ mt: 1 }}
          />
        </FormControl>
        <FormControl>
          <FormLabel id="radioGroup" sx={{ mt: 1 }}>Your followers</FormLabel>
          <RadioGroup
            aria-labelledby="radioGroup"
            name="radioGroup"
            defaultValue={nullValue}
            onChange={onChangeFriend}
            sx={{ display: 'flex' }}
          >
            <FormControlLabel value={nullValue} control={<Radio />} label="show all" sx={{ color: 'text.primary' }} />
            <FormControlLabel value="true" control={<Radio />} label="follow" sx={{ color: 'text.primary' }} />
            <FormControlLabel value="false" control={<Radio />} label="unfollow" sx={{ color: 'text.primary' }} />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box >
  )
}