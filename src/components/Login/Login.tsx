import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { Typography, TextField, Button, Box, Checkbox, FormControlLabel, useTheme, Alert } from '@mui/material';
import { authAPI } from '../../api/authAPI'
import { getAuth } from '../../redux/thunks/authThunk';

const Login = () => {
  const isAuth = useAppSelector(state => state.authReducer.isAuth)
  const dispatch = useAppDispatch()
  const [captchaURL, setCaptchaURL] = useState<string | undefined>(undefined)

  const theme = useTheme()

  const submitForm = async (values: any) => {
    try {
      const res = await authAPI.login(values)
      if (res.resultCode === 0) {
        dispatch(getAuth())
      } else if (res.resultCode === 1) {
        formik.setErrors({ email: (res.messages[0]), password: (res.messages[0]) })
      } else if (res.resultCode === 10) {
        const res = await authAPI.captcha()
        setCaptchaURL(res.url)
        formik.setErrors({ captcha: ('Сaptcha entered incorrectly') })
        formik.values.captcha = ''
      }
    } catch (error: unknown) {
      error instanceof Error ? formik.setStatus(error.message) : formik.setStatus(String(error))
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: true,
      captcha: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
      captcha: Yup.string().optional()
    }),
    onSubmit: values => submitForm(values)
    // onSubmit: (values) => {
    //   dispatch(login(values))
    // }
  })

  if (isAuth) {
    return <Navigate replace to='/profile' />
  }

  return (
    <Box sx={{ m: 1 }}>
      <Typography color='text.primary' sx={{ m: 1 }}>Login</Typography>
      <Box component='form' onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', }}>
        {/* <Typography color='error.main' sx={{ m: 1 }}>{formik.status}</Typography> */}
        {formik.status && <Alert severity="error" sx={{ m: 1 }}>{formik.status}</Alert>}
        <TextField
          id='email'
          name='email'
          type='text'
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          variant='standard'
          sx={{ mb: 1, 'input': { pl: 1 } }}
        />
        <TextField
          id='password'
          name='password'
          label="Password"
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          variant='standard'
          sx={{ mb: 1, 'input': { pl: 1 } }}
        />
        <FormControlLabel
          id='rememberMe'
          name='rememberMe'
          label='remember me'
          control={<Checkbox checked={formik.values.rememberMe} />}
          onChange={formik.handleChange}
          sx={{ mb: 1, 'span': { color: 'text.primary' } }}
        />
        {captchaURL &&
          <>
            <Box component='img' src={captchaURL} sx={{ height: '60px', width: '120px', margin: '0 auto', filter: theme.palette.mode === 'dark' ? 'invert(93%)' : null }} />
            <TextField
              id='captcha'
              name='captcha'
              label='Enter symbols'
              type='text'
              value={formik.values.captcha}
              onChange={formik.handleChange}
              error={formik.touched.captcha && Boolean(formik.errors.captcha)}
              helperText={formik.touched.captcha && formik.errors.captcha}
              variant='standard'
              sx={{ mb: 1, 'input': { pl: 1 } }}
            />
          </>
        }
        <Button type='submit' variant='outlined' disabled={formik.isSubmitting}>Submit</Button>
      </Box>
    </Box>
  )
}

export { Login }