import React, { FC, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetMessageQuery, useSendMessageMutation } from '../../../api/dialogsApi'
import { useChatScroll } from '../../../hooks/useChatScroll'
import style from './Messages.module.css'

import { Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { Preloader } from '../../Preloader'

const Messages: FC = () => {
  const { sendUserId } = useParams()
  const { data } = useGetMessageQuery(sendUserId)
  const [message, setMessage] = useState('')
  const [sendMessage, { isLoading }] = useSendMessageMutation()
  const navigate = useNavigate()


  function handleClick(sendUserId: string, message: string) {
    sendMessage({ sendUserId, message })
    setMessage('')
  }

  const date = (dateApi: string) => new Date(dateApi + 'Z').toLocaleString("ru", { timeZone: `${Intl.DateTimeFormat().resolvedOptions().timeZone}` })

  const ref = useChatScroll(data)

  return (
    <div>
      <div onClick={() => { navigate('/messages') }}>←</div>
      <div ref={ref} className={style.messages}>
        {data && data.items.map(m =>
          <div key={m.id}>
            <div>{m.senderName}</div>
            <div>{m.body}</div>
            <div>{date(m.addedAt)}</div>
          </div>
        )}
      </div>
      <form>
        <TextField
          rows={3}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type='text'
          autoFocus
          multiline
          // minRows='3'
          // maxRows='3'
          size="small"
          id="filled-basic"
        ></TextField>
        <Button
          onClick={() => handleClick(sendUserId!, message)}
          type="submit"
          endIcon={!isLoading ? <SendIcon /> : <Preloader size={20} speed={1} />}
          disabled={isLoading}
          variant="contained"
        >Send</Button>
      </form>
    </div>
  )
}

export default Messages

