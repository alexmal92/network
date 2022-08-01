import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from '../../../redux/action'
import style from './PagesCount.module.css'

export const PagesCount = (props) => {
  const dispatch = useDispatch()
  const totalUsersCount = useSelector(state => state.usersReducer.totalCount)
  
  //общее кол-во страниц 
  const [pagesCount, setPagesCount] = useState(15)

  let pages = []
  for (let i = 0; i <= pagesCount; i++) {
    pages.push(i);
  }

  pages = pages.slice(props.pageNum < 5 ? props.pageNum - props.pageNum + 1 : props.pageNum - 4, props.pageNum + 5)

  useEffect(() => {
    setPagesCount(totalUsersCount / props.onPageUsersCount)
  }, [totalUsersCount, props.onPageUsersCount])

  return (
    <div className={style.filter}>
      <div>{pages.map(p => <span key={p} onClick={e => dispatch(setCurrentPage(p))} className={p === props.pageNum ? style.selected : style.nonSelected}>{p}</span>)}</div>
    </div>
  )

}

