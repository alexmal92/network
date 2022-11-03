import React from 'react'
import style from './Posts.module.css'
import { delPostAC } from '../../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';

function Posts() {

  const dispatch = useAppDispatch()

  const posts = useAppSelector(state => state.userProfileReducer.posts)

  return (
    <div>{posts.map(p =>
      <div key={p.postId} className={style.wrapper}>
        <img className={style.img} src={p.postImg} alt="" />
        <div className={style.posts}>{p.postMessage}</div>
        <button onClick={() => dispatch(delPostAC(p.postId))}>x</button>
      </div>)}
    </div>
  )
}

export default Posts