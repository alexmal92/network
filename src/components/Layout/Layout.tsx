import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Navbar } from '../Navbar/Navbar'
import { Container, Divider } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

function Layout() {
  return (
    <Container maxWidth='lg' sx={{ minHeight: '100vh' }}>
      <Grid2 container >
        <Grid2 sm={12}>
          <Header />
        </Grid2>
        <Grid2 xs={12} sm={2}>
          <Navbar />
        </Grid2>
        <Grid2 xs={12} sm={8} sx={{flexGrow: 1}}>
          <Container disableGutters component='main' sx={{ display: 'flex' }} >
            <Divider flexItem orientation='vertical' variant='middle' sx={{ m: 2, position: 'sticky', top: '0' }} />
            <Outlet />
          </Container>
        </Grid2>
        <Grid2 xs={12}>
          <footer> Made in 2022 </footer>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export { Layout }