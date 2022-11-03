import React, { FC, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoImg } from '../../assets/logo.svg'
import imgNoImg from '../../assets/user.png'
import { getMeProfile, logout } from '../../redux/thunks/authThunk'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { AppBar, SvgIcon, Toolbar, Typography, Box, styled, Divider, IconButton, Avatar, useTheme } from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '../../providers/Theme'

const Header: FC = () => {

  const { isAuth, data: { id: userId, login }, user } = useAppSelector(state => state.authReducer)

  const dispatch = useAppDispatch()

  const colorMode = useContext(ColorModeContext)
  const theme = useTheme()

  useEffect(() => {
    if (userId) {
      dispatch(getMeProfile(userId))
    }
  }, [userId, dispatch])

  return (
    <AppBar position="static" sx={{ borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px' }}>
      <Toolbar>
        <Logo children={<LogoImg />} inheritViewBox sx={{ mr: 5, ml: 5, pb: 1, }} />
        <Divider flexItem orientation='vertical' variant='middle' sx={{ mr: 2, ml: 2 }} />
        <Typography sx={{ flexGrow: 1, mr: 1, ml: 1 }}>Users</Typography>
        <Divider flexItem orientation='vertical' variant='middle' sx={{ mr: 2, ml: 2 }} />
        <IconButton onClick={colorMode.toggleTheme}  >
          {theme.palette.mode === 'dark' ? <DarkModeIcon sx={{ color: '#FFD701' }} /> : <LightModeIcon sx={{ color: '#FFFFFF' }} />}
        </IconButton>
        <Typography noWrap sx={{ mr: 1, ml: 1 }} >{`${theme.palette.mode}`}</Typography>
        <Divider flexItem orientation='vertical' variant='middle' sx={{ mr: 2, ml: 2 }} />
        {
          isAuth ?
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar alt="Avatar" src={user ? user.photos.large : imgNoImg} />
              <Typography sx={{ p: '10px' }}>{login}</Typography>
              <IconButton onClick={() => dispatch(logout())} color="inherit">
                <LogoutIcon />
              </IconButton>
            </Box>
            :
            <IconButton component={Link} to='/login' color='inherit'>
              <LoginIcon />
            </IconButton>
        }
      </Toolbar>
    </AppBar>
  )
}

export { Header }

const Logo = styled(SvgIcon)<SvgIconProps>(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.success.main : 'text.primary',
  width: '50px',
  height: '40px',
  '&:hover': {
    fontWeight: 'bold',
  },
}));