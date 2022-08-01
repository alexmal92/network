import { authAPI } from "../../api/api"
import { setMe, setMeError } from "../action"

export const getAuth = () => async (dispatch) => {
  let response = await authAPI.me()
  if (response.resultCode === 0) {
    dispatch(setMe(response.data, true, false))
  }
  if (response.resultCode !== 0) {
    dispatch(setMeError(true))
  }
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(getAuth())
    }
  })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(data => {
    if (data.resultCode === 0) {
      dispatch(setMe({ id: null, email: null, login: null }, false, false))
    }
    if (data.resultCode !== 0) {
      dispatch(setMeError(true))
    }
  })
}


