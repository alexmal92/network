import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { IDialog } from '../../api/dialogsApi'
import NoImg from './../../assets/user.png'
import style from './Dialogs.module.css'

const timeReg = /(\d\d\d\d)-(\d\d)-(\d\d)T(?<hour>\d\d):(\d\d:\d\d).*/

function hourTrim(pattern: string) {
  let hourTime = Number(pattern.match(timeReg)?.groups?.hour!) + 3
  return hourTime < 10 ? '0' + hourTime : hourTime
}

export const Dialog: FC<IDialog> = (props) => {

  return (
    <div className={style.wrapperInner}>
      <NavLink to={'/profile/' + props.id}>
        <img className={style.img} src={props.photos.small ? props.photos.small : NoImg}></img>
        <div>{props.userName}</div>
      </NavLink>
      <NavLink to={'/messages/' + props.id}>
        <div>
          {props.hasNewMessages && <div>New unread massage</div>}
        </div>
        <div>
          <div><b>last activity </b>{props.lastUserActivityDate.replace(timeReg, `${hourTrim(props.lastUserActivityDate)}:$5 $3-$2-$1`)}</div>
          <div><b>last message </b>{props.lastDialogActivityDate.replace(timeReg, `${hourTrim(props.lastDialogActivityDate)}:$5 $3-$2-$1`)}</div>
        </div>
      </NavLink>

    </div>
  )
}
