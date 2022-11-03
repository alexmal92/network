import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().max(30, 'Must be 30 characters or less').required('Required')
})