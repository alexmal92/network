import { userProfileAPI } from "../../api/api"
import { getUserProfile, setUserPhoto, setUserStatus } from "../action"

export const getProfile = (userID) => (dispatch) => {
  userProfileAPI.getProfile(userID).then(data => {
    dispatch(getUserProfile(data))
  })
}

export const getStatus = (userID) => (dispatch) => {
  userProfileAPI.getStatus(userID).then(data => {
    dispatch(setUserStatus(data))
  })
}

export const setStatus = (userID, status) => (dispatch) => {
  userProfileAPI.setStatus(status).then(data => {
    if (data.resultCode === 0) {
      dispatch(getStatus(userID))
    }
  })
}

export const setPhoto = (img) => (dispatch) => {
  userProfileAPI.setPhoto(img).then(data => {
    if (data.resultCode === 0) {
      dispatch(setUserPhoto(data))
    }
  })
}

export const setInfo = (userID, userInfo) => (dispatch) => {
  userProfileAPI.setProfile(userInfo).then(data => {
    if (data.resultCode === 0) {
      dispatch(getProfile(userID))
    }
  })
}