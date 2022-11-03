import { ThunkAction } from "redux-thunk"
import { profileAPI } from "../../api/profileAPI"
import { ActionTypes, UserProfileType } from "../../utils/types/types"
import { getUserProfile, setUserPhoto, setUserStatus } from "../actions"
import { RootState } from "../store"

export const getProfile = (userID: number): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
  try {
    let res = await profileAPI.getProfile(userID)
    dispatch(getUserProfile(res))
  } catch (e) {
    console.log(e)
  }
}

export const getStatus = (userID: number): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
  let res = await profileAPI.getStatus(userID)
  dispatch(setUserStatus(res))
}

export const setStatus = (userID: number, status: string): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
  let res = await profileAPI.setStatus(status)
  if (res.resultCode === 0) {
    dispatch(getStatus(userID))
  }
}

export const setPhoto = (img: File): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
  let res = await profileAPI.setPhoto(img)
  if (res.resultCode === 0) {
    dispatch(setUserPhoto(res.data))
  }
}

export const setInfo = (userID: number, userInfo: UserProfileType): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
  let res = await profileAPI.setProfile(userInfo)
  if (res.resultCode === 0) {
    dispatch(getProfile(userID))
  }
}

