import React, { FC } from 'react'
import style from './Profile.module.css'
import { addPostAC } from '../../redux/actions' //dislikeAC, likesAC,
import { useState, useEffect, } from 'react'
import imgNoImg from '../../assets/user.png'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Preloader } from '../Preloader'
import { getProfile } from '../../redux/thunks/userProfileThunk'
import { Status } from './Status/Status'
import { Info } from './Info/Info'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import Posts from './Posts/Posts'


const Profile: FC = () => {
  const userAuth = useAppSelector(state => state.authReducer.data.id)
  const isFetching = useAppSelector(state => state.userProfileReducer.isFetching)
  const user = useAppSelector(state => state.userProfileReducer.user)

  // const [isFetching, setIsFetching] = useState(false)
  const [inputText, setInputText] = useState('')
  const dispatch = useAppDispatch()

  const [likes, setLikes] = useState(3)

  const navigate = useNavigate()

  function createPost() {
    dispatch(addPostAC(inputText))
    setInputText('')
  }


  const { paramsUserID } = useParams()
  let userID: number | null = Number(paramsUserID)

  if (!userID) {
    userID = userAuth
  }


  useEffect(() => {
    if (userID) {
      dispatch(getProfile(userID))
    }
  }, [userID, dispatch])

  if (!userID) {
    return <Navigate to='/login' />
  }

  if (!user) {
    return <Preloader size={40} color='#000000' />
  }

  return (
    <div className={style.profile}>
      <div>
        <div>{user.fullName}</div>
        <img className={style.avatar} src={user.photos.large || imgNoImg} alt="" />
        <div><Status userID={userID} /></div>
        {isFetching ? <Preloader /> : null}
      </div>
      {userID !== userAuth && <button onClick={() => navigate(`/messages/${userID}`)}>Send Message</button>}
      <div>
        <Info />
      </div>
      <div>
        <button onClick={() => setLikes(likes + 1)}> ❤ {likes}</button>
        <button onClick={() => setLikes(likes - 1)}> dislike </button>
      </div>
      <div>
        <input type="textarea" placeholder='Your message..' value={inputText}
          onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { createPost() } }} />
        <button type="button" onClick={() => { createPost() }}>add post</button>
      </div>
      <div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile
// const mapStateToProps = (state) => {
//   return {
//     // users: state.usersReducer.users,
//     // likes: state.likeReducer.likes,
//     // posts: state.textReducer.posts,
//     // inputText: state.textReducer.text
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // onIncrementLikes: () => dispatch(likesAC()),
//     // onDecrementLikes: () => dispatch(dislikeAC()),
//     // onTextChange: (text) => dispatch(handleChangeAC(text)),
//     // addPost: () => dispatch(addPostAC())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Profile)