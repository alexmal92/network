import React, { useState } from 'react'
import { InfoShow } from './InfoShow/InfoShow'
import { useAppSelector } from '../../../hooks/hooks'
import { InfoEdit } from './InfoEdit/InfoEdit'

export const Info = () => {

  const userID = useAppSelector(state => state.userProfileReducer.user!.userId)
  const userAuth = useAppSelector(state => state.authReducer.data.id)
  const [editMode, setEditMode] = useState(false)

  return (
    <div>
      {editMode ?
        <div>
          <InfoEdit setEditMode={setEditMode} />
        </div>
        : userID === userAuth ?
          <div>
            <button onClick={() => setEditMode(true)}>Edit</button>
            <InfoShow />
          </div>
          : <InfoShow />
      }
    </div>
  )
}



