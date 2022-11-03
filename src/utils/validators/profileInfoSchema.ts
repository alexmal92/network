import * as Yup from 'yup'

export const profileInfoSchema = Yup.object().shape({
  fullName: Yup.string().max(30, 'Must be 30 characters or less'),
  aboutMe: Yup.string().max(30, 'Must be 30 characters or less'),
  lookingForAJobDescription: Yup.string().max(30, 'Must be 30 characters or less'),
  // contacts: Yup.object().shape({
  //   vk: Yup.string().email('Invalid email address'),
  //   github: Yup.string().email('Invalid email address'),
  //   youtube: Yup.string().email('Invalid email address'),
  //   facebook: Yup.string().email('Invalid email address'),
  //   instagram: Yup.string().email('Invalid email address'),
  //   twitter: Yup.string().email('Invalid email address'),
  //   mainLink: Yup.string().email('Invalid email address'),
  //   website: Yup.string().email('Invalid email address'),
  // })

})