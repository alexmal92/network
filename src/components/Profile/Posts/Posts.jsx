import React from 'react'
import style from './Posts.module.css'
import { connect } from 'react-redux'
import { delPostAC } from '../../../redux/action';



function Posts(props) {

  return (
    <div className={style.wrapper}>
      <img className={style.img} id={props.id} src={props.img} alt="" />
      <div className={style.posts}>{props.message}</div>
      <button onClick={() => props.deletePost(props.id)}>×</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: (id) => dispatch(delPostAC(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)