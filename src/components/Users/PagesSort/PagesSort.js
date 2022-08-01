import React from 'react'
import style from './PagesSort.module.css'

export const PagesSort = (props) => {
  // сортировка страницы
  const pagesCountSort = [15, 30, 45]

  return (
    <div className={style.pageCount}>sorted count: {pagesCountSort.map(s => <span key={s} onClick={e => props.setOnPageUsersCount(s)}
      className={s === props.onPageUsersCount ? style.selected : style.nonSelected} >{s}</span>)}</div>
  )
}
