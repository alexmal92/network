import React from 'react'
import style from './Dialogs.module.css'
import withAuth from '../../redux/HOC/withAuth'
import { Dialog } from './Dialog'
import { useGetAllDialogsQuery } from '../../api/dialogsApi'

const Dialogs = () => {
  const { data } = useGetAllDialogsQuery([])

  return (
    <div className={style.wrapper}>
      {data && data.map(d =>
        <div key={d.id}>
          <Dialog {...d} />
        </div>
      )}
    </div>
  )
}

export default withAuth(Dialogs)