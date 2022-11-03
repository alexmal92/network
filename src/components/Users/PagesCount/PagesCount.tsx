import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setPagesCount } from '../../../redux/actions'
import style from './PagesCount.module.css'

export const PagesCount: React.FC = () => {
  const dispatch = useAppDispatch()
  const { totalCount, usersPortion } = useAppSelector(state => state.usersReducer)

  const [allPages, setAllPages] = useState<number[]>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pages, setPages] = useState<number[]>()

  // useEffect(() => {
  //   setPages(() => allPages && allPages.slice((currentPage < 5 ? 1 : currentPage - 3), currentPage + 5))
  // }, [currentPage, allPages])
  
  // useEffect(() => {
  //   console.count('render')
  //   let allPagesArray: number[] = []
  //   const allPagesCount = Math.ceil(totalCount / usersPortion)
  //   for (let i = 0; i <= allPagesCount; i++) {
  //     allPagesArray.push(i)
  //   }

  //   setAllPages(allPagesArray)
  //   dispatch(setPagesCount(allPagesCount))
  // }, [totalCount, usersPortion])

  return (
    <div className={style.filter}>
      {/* <div>{pages && pages.map(p => <span key={p} onClick={() => setCurrentPage(p)} className={p === currentPage ? style.selected : style.nonSelected}>{p}</span>)}</div> */}
    </div>
  )

}

