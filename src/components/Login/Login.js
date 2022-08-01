import React from 'react'
import style from './Login.module.css'
import { Field, Formik, Form } from 'formik'
import { loginSchema } from '../../utils/validators/loginSchema'
import { login } from '../../redux/thunks/authThunk'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";

function Login() {
  const isAuth = useSelector(state => state.authReducer.isAuth)

  const dispatch = useDispatch()

  if (isAuth) {
    return <Navigate replace to='/profile' />
  }

  return (
    <div className={style.wrapper}>
      <div>Login</div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          const { email, password, rememberMe } = values
          dispatch(login(email, password, rememberMe))
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field
                id='email'
                name='email'
                type='text'
                placeholder='email'
              />
              {touched.email && errors.email ? <p>{errors.email}</p> : null}
            </div>
            <div>
              <Field
                id='password'
                name='password'
                type='password'
                placeholder='password'
                autoComplete='on'
              />
              {touched.password && errors.password ? <p>{errors.password}</p> : null}
            </div>
            <div>
              <label>
                <Field
                  id='rememberMe'
                  name='rememberMe'
                  type='checkbox'
                /> remember me
              </label>
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div >

  )
}

export default Login