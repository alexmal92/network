import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getStatus, setStatus } from '../../../redux/thunks/userProfileThunk';

export const Status = (props) => {
  const userAuth = useSelector(state => state.authReducer.data.id)
  const userStatus = useSelector(state => state.userProfileReducer.status)

  const [inputText, setInputText] = useState('')
  const [editMode, setEditMode] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStatus(props.userID))
    setInputText(userStatus)
  }, [props.userID, userStatus, dispatch])

  return (
    <div>
      {editMode
        ?
        <div>
          <input
            autoFocus={true}
            onBlur={() => setEditMode(false) & dispatch(setStatus(props.userID, inputText))}
            onChange={e => setInputText(e.target.value)} value={inputText} />
        </div>
        :
        <div onDoubleClick={props.userID === userAuth ? () => setEditMode(true) : null}>{!userStatus ? 'Нет статуса' : userStatus}</div>
      }
    </div>
  )
}
