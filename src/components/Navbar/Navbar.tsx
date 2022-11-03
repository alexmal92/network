import { Divider, LinkProps, List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme, Box } from '@mui/material';
import React, { useContext } from 'react'
import { NavLink, useLocation } from "react-router-dom";
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';


function Navbar() {

  return (
    <Box sx={{ position: 'sticky', top: '0' }}>
      <List component="nav">
        <ul>
          <RouterNavLink icon={<HomeIcon />} text='Profile' to='/profile' />
          <RouterNavLink icon={<DraftsIcon />} text='Messages' to='/messages' />
          <RouterNavLink icon={<GroupIcon />} text='Users' to='/users' />
          <RouterNavLink icon={<ChatIcon />} text='Chat' to='/chat' />
          <RouterNavLink icon={<SettingsIcon />} text='Settings' to='/settings' />
        </ul>
      </List>
      <Divider />
    </Box>
  )
}

interface NavLinkRouterProps extends LinkProps {
  to: string
  text: string
  icon?: React.ReactElement
}

const RouterNavLink = (props: NavLinkRouterProps) => {
  const { to, text, icon } = props
  const { pathname } = useLocation()

  return (
    <li>
      <ListItemButton
        to={to}
        component={NavLink}
        selected={to === pathname.slice(0, to.length)}
        sx={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }}>
        {icon ? <ListItemIcon >{icon}</ListItemIcon> : null}
        <ListItemText primary={<Typography color='text.primary'>{text}</Typography>} />
      </ListItemButton>
    </li >
  )
}

export { Navbar }