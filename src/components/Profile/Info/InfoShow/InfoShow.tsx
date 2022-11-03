import { useAppSelector } from "../../../../hooks/hooks"
import { Preloader } from "../../../Preloader"

export const InfoShow = () => {

  const user = useAppSelector(state => state.userProfileReducer.user)

  if (!user) {
    return <Preloader />
  }

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