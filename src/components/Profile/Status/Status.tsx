import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { getStatus, setStatus } from '../../../redux/thunks/userProfileThunk';

interface IProps {
  userID: number
}

export const Status: FC<IProps> = ({ userID }) => {
  const userAuth = useAppSelector(state => state.authReducer.data.id)
  const userStatus = useAppSelector(state => state.userProfileReducer.status)

  const [inputText, setInputText] = useState('')
  const [editMode, setEditMode] = useState(false)
  const dispatch = useAppDispatch()

  function addStatus(userID: number, inputText: string) {
    setEditMode(false)
    dispatch(setStatus(userID, inputText))
  }

  function isUserCanSetEditMode() {
    if (userID === userAuth) {
      setEditMode(true)
    }
  }

  useEffect(() => {
    dispatch(getStatus(userID))
    setInputText(userStatus)
  }, [userID, userStatus, dispatch])

  return (
    <div>
      {editMode
        ?
        <div>
          <input
            autoFocus={true}
            onBlur={() => addStatus(userID, inputText)}
            onChange={e => setInputText(e.target.value)} value={inputText} />
        </div>
        :
        <div onDoubleClick={() => isUserCanSetEditMode()}>{!userStatus ? 'Нет статуса' : userStatus}</div>
      }
    </div>
  )
}
