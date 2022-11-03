import React, { FC } from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { setPhoto } from '../../redux/thunks/userProfileThunk'

export const Settings: FC = () => {

  const [avatar, setAvatar] = useState<File>()
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>Download profile photo</div>
      <label>
        <input type='file' onChange={(e) => setAvatar(e.target.files![0])} />
        {avatar
          ?
          <button onClick={() => dispatch(setPhoto(avatar))}>Upload</button>
          :
          <div>
            <div>Please choose a file</div>
            <button disabled>Upload</button>
          </div>
        }
      </label>
    </div>
  )
} 