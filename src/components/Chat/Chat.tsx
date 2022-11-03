import React, { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { IMessage } from '../../redux/slices/chat-slice'
import style from './Chat.module.css'
import noImg from '../../assets/user.png'
import uniqid from 'uniqid'
import { ws } from '../../api/chatAPI'


export const Chat = () => {
  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  )
}

const Messages = () => {
  const messages = useAppSelector(state => state.chatSlice.messages)

  useEffect(() => {
    // connect()
  }, [])

  return (
    <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
      {
        messages.map((m) => <Message key={uniqid()} message={m} />)
      }
    </div>
  )
}

const Message: FC<{ message: IMessage }> = ({ message }) => {
  const me = useAppSelector(state => state.authReducer.data.id)

  return (
    <div className={`${style.wrapper} ${(message.userId === me ? style.wrapperMe : '')}`}>
      <img className={style.img} src={message.photo ? message.photo : noImg} alt='avatar'></img>
      <div className={style.message}>
        <div className={style.userName}>{message.userName}</div>
        <div>{message.message}</div>
      </div>
    </div>
  )
}

const AddMessageForm = () => {
  const [message, setMesage] = useState('')

  function sendMessage() {
    ws?.send(message)
    setMesage('')
  }

  return (
    <div>
      <textarea value={message} onChange={e => setMesage(e.currentTarget.value)}></textarea>
      {/* <button onClick={sendMessage}>Send</button> */}
    </div>
  )
}
