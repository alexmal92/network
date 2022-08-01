import Posts from './Posts/Posts'
import React from 'react'
import style from './Profile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addPostAC } from '../../redux/action' //dislikeAC, likesAC,
import { useState, useEffect, } from 'react'
import imgNoImg from '../../assets/user.png'
import { Navigate, useParams } from 'react-router-dom'

import Preloader from '../Preloader'
import { getProfile } from '../../redux/thunks/userProfileThunk'
import { Status } from './Status/Status'
import { Info } from './Info/Info'


const Profile = () => {
  const userAuth = useSelector(state => state.authReducer.data.id)
  const isFetching = useSelector(state => state.userProfileReducer.isFetching)
  const user = useSelector(state => state.userProfileReducer.user)

  // const [isFetching, setIsFetching] = useState(false)
  const [inputText, setInputText] = useState('')
  const dispatch = useDispatch()

  const posts = useSelector(state => state.userProfileReducer.posts)

  const [likes, setLikes] = useState(3)


  let { userID } = useParams()
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
    return <Preloader size='40' color='#000000' />
  }

  return (
    <div className={style.profile}>
      <div>
        <div>{user.fullName}</div>
        <img className={style.avatar} src={user.photos.large || imgNoImg} alt="" />
        <div><Status userID={userID} /></div>
        {isFetching ? <Preloader /> : null}
      </div>
      <div>
        <Info />
      </div>
      <div>
        <button onClick={() => setLikes(likes + 1)}> ❤ {likes}</button>
        <button onClick={() => setLikes(likes - 1)}> dislike </button>
      </div>
      <div>
        <input type="textarea" placeholder='Your message..' value={inputText}
          onChange={e => setInputText(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { dispatch(addPostAC(inputText), setInputText('')) } }} />
        <button type="button" onClick={() => dispatch(addPostAC(inputText)) & setInputText('')}>add post</button>
      </div>
      {posts.map(p => <Posts key={p.postId} id={p.postId} img={p.postImg} message={p.postMessage} />)}
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