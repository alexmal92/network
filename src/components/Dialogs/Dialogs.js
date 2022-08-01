import React from 'react'
import Messages from './Messages/Messages'
import style from './Dialogs.module.css'
import withAuth from '../../redux/HOC/withAuth'

function Dialogs() {
  return (
    <div className={style.messages}>
      <div>
        Пользователи
      </div>
      <div>
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
      </div>
    </div>

  )
}

export default withAuth(Dialogs)