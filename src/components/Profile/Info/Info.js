import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import { profileInfoSchema } from '../../../utils/validators/profileInfoSchema'
import Preloader from '../../Preloader'
import { setInfo } from '../../../redux/thunks/userProfileThunk'

export const Info = () => {

  const userID = useSelector(state => state.userProfileReducer.user.userId)
  const userAuth = useSelector(state => state.authReducer.data.id)
  const [editMode, setEditMode] = useState(false)

  return (
    <div>
      {editMode ?
        <div>
          <InfoEdit setEditMode={setEditMode} />
        </div>
        : userID === userAuth ?
          <div>
            <button onClick={() => setEditMode(true)}>Edit</button>
            <InfoShow />
          </div>
          : <InfoShow />
      }
    </div>
  )
}

const InfoShow = () => {

  const user = useSelector(state => state.userProfileReducer.user)

  return (
    <div>
      <div>
        <p>I'm: {user.fullName}</p>
      </div>
      <div>
        <p>About Me: {user.aboutMe}</p>
      </div>
      <div>
        <p>Looking for a Job: {user.lookingForAJob ? 'Yes' : 'No'}</p>
      </div>
      {user.lookingForAJob
        ?
        <div>
          <p>Job skills: {user.lookingForAJobDescription}</p>
        </div>
        : null
      }
      <div>
        <p>Contacts</p>
        {Object.values(user.contacts).every(e => e === null)
          ?
          <p>Not contacts</p>
          : Object.keys(user.contacts).map(key =>
            user.contacts[key] ? <p key={key}>{key}: {user.contacts[key]}</p> : null)
        }
      </div>
    </div>
  )
}

const InfoEdit = (props) => {
  const userAuth = useSelector(state => state.authReducer.data.id)
  const user = useSelector(state => state.userProfileReducer.user)

  const [userInit, setUserInit] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    //фильтруем от лишних данных
    const allowed = ['fullName', 'aboutMe', 'contacts', 'lookingForAJob', 'lookingForAJobDescription']
    const userFiltered = Object.fromEntries(allowed.map(key => [key, user[key]]));

    setUserInit(userFiltered)
  }, [user])

  if (!userInit) {
    return <Preloader size='40' color='#000000' />
  }

  const initialValues = {
    fullName: userInit.fullName ?? '',
    aboutMe: userInit.aboutMe ?? '',
    lookingForAJob: userInit.lookingForAJob ?? '',
    lookingForAJobDescription: userInit.lookingForAJobDescription ?? '',
    contacts: {
      vk: userInit.contacts.vk ?? '',
      github: userInit.contacts.github ?? '',
      youtube: userInit.contacts.youtube ?? '',
      facebook: userInit.contacts.facebook ?? '',
      instagram: userInit.contacts.instagram ?? '',
      twitter: userInit.contacts.twitter ?? '',
      mainLink: userInit.contacts.mainLink ?? '',
      website: userInit.contacts.website ?? '',
    },
  }

  return (
    <Formik
      validationSchema={profileInfoSchema}
      initialValues={initialValues}
      onSubmit={(values) => {
        dispatch(setInfo(userAuth, values))
        props.setEditMode(false)
      }}
    >
      {({ values, touched, errors }) => (
        <Form>
          <div>
            <span>My name: </span>
            <Field
              id='fullName'
              name='fullName'
              type='text'
            />
            {touched.fullName && errors.fullName ? <p>{errors.fullName}</p> : null}
          </div>
          <div>
            <span>About Me: </span>
            <Field
              id='aboutMe'
              name='aboutMe'
              type='text'
            />
            {touched.aboutMe && errors.aboutMe ? <p>{errors.aboutMe}</p> : null}
          </div>
          <div>
            <label>
              <Field
                name='lookingForAJob'
                type='checkbox'
              />
              <span>Looking for a Job</span>
            </label>
          </div>
          <div>
            <span>Job skills: </span>
            <Field
              id='lookingForAJobDescription'
              name='lookingForAJobDescription'
              type='text'
              disabled={!values.lookingForAJob}
            />
            {touched.lookingForAJobDescription && errors.lookingForAJobDescription ? <p>{errors.lookingForAJobDescription}</p> : null}
          </div>
          <div>
            <p>Contacts</p>
            {Object.keys(userInit.contacts).map(key =>
              <div key={key}>
                <span>{key}</span>
                <Field
                  name={'contacts.' + key}
                  type='text'
                />
                {errors.contacts && touched.contacts ?
                  touched.contacts[key] && errors.contacts[key] ?
                    <p>{errors.contacts[key]}</p>
                    : null
                  : null
                }
              </div>
            )}
          </div>
          <div>
            <button type='submit'>Save</button>
            <button onMouseDown={() => props.setEditMode(false)} >Exit</button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
