import { Field, Form, Formik } from "formik"
import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks"
import { setInfo } from "../../../../redux/thunks/userProfileThunk"
import { TypeUseStateDispatch, UserProfileType } from "../../../../utils/types/types"
import { profileInfoSchema } from "../../../../utils/validators/profileInfoSchema"

interface IProps {
  setEditMode: TypeUseStateDispatch<boolean>
}

export const InfoEdit: FC<IProps> = ({ setEditMode }) => {
  const userAuth = useAppSelector(state => state.authReducer.data.id)
  const user = useAppSelector(state => state.userProfileReducer.user!)
  const dispatch = useAppDispatch()

  const initialValues: UserProfileType = {
    fullName: user.fullName ?? '',
    aboutMe: user.aboutMe ?? '',
    lookingForAJob: user.lookingForAJob ?? '',
    lookingForAJobDescription: user.lookingForAJobDescription ?? '',
    contacts: {
      vk: user.contacts.vk ?? '',
      github: user.contacts.github ?? '',
      youtube: user.contacts.youtube ?? '',
      facebook: user.contacts.facebook ?? '',
      instagram: user.contacts.instagram ?? '',
      twitter: user.contacts.twitter ?? '',
      mainLink: user.contacts.mainLink ?? '',
      website: user.contacts.website ?? '',
    },
    photos: user.photos,
    userId: user.userId
  }

  return (
    <Formik
      validationSchema={profileInfoSchema}
      initialValues={initialValues}
      onSubmit={(values) => {
        dispatch(setInfo(userAuth!, values))
        setEditMode(false)
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
            {Object.keys(user.contacts).map(key =>
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
            <button onMouseDown={() => setEditMode(false)} >Exit</button>
          </div>
        </Form>
      )}
    </Formik>
  )
}




  // const [userInit, setUserInit] = useState<IInitialValues>()

  // interface IInitialValues {
  //   aboutMe: string
  //   contacts: ContactsType
  //   fullName: string
  //   lookingForAJob: boolean
  //   lookingForAJobDescription: string
  // }

  // useEffect(() => {
  //   //фильтруем от лишних данных
  //   const allowed = ['fullName', 'aboutMe', 'contacts', 'lookingForAJob', 'lookingForAJobDescription']
  //   // @ts-ignore: незнаю как типизировать это
  //   const userFiltered: IInitialValues = Object.fromEntries(allowed.map(key => [key, user[key]]));

  //   setUserInit(userFiltered)
  // }, [user])


  // if (!userInit) {
  //   return <Preloader size={40} color='#000000' />
  // }