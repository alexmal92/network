import { RootState } from "./../store";
import { ThunkAction } from "redux-thunk"
import { authAPI } from "../../api/authAPI"
import { setMe, setMeError, getAuthProfile } from "../actions"
import { ActionTypes, Thunk } from "../../utils/types/types";
import { profileAPI } from "../../api/profileAPI";

export const getAuth = (): Thunk => async (dispatch) => {
  try {
    let res = await authAPI.me()
    if (res.resultCode === 0) {
      dispatch(setMe(res.data, true, false))
    }
  } catch (e) {
  }
}

export const login = (data: IData): Thunk => async (dispatch) => {
  try {
    let res = await authAPI.login(data)
    if (res.resultCode === 0) {
      dispatch(getAuth())
    } 
  } catch (e) { 
  }
}

export const logout = (): Thunk => async (dispatch) => {
  let res = await authAPI.logout()
  if (res.resultCode === 0) {
    dispatch(setMe({ id: null, email: null, login: null }, false, false))
  }
  if (res.resultCode !== 0) {
    dispatch(setMeError(true))
  }
}


//AuthProfile

export const getMeProfile = (userID: number): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
  try {
    let res = await profileAPI.getProfile(userID)
    dispatch(getAuthProfile(res))
  } catch (e) {
    console.log(e)
  }
}


//interface

interface IData {
  email: string
  password: string
  rememberMe: boolean
}