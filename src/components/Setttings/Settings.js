import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPhoto } from '../../redux/thunks/userProfileThunk'
export const Settings = () => {
  
  const [inputValue, setInputValue] = useState()
  const dispatch = useDispatch()

  return (
    <div>
      <div>Download profile photo</div>
      <label>
        <input type='file'onChange={(e) => setInputValue(e.target.files[0])} />
        <button onClick={() => dispatch(setPhoto(inputValue))}>Upload</button>
      </label>
    </div>
  )
}
