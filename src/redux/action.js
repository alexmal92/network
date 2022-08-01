import {
  DECREMENT_LIKES, INCREMENT_LIKES, TEXT_TYPING, CREATE_POST, DELETE_POST,
  TEXT_TYPING_ADDPOST, SET_USERS, TOGGLE_FOLLOW, SET_TOTAL_COUNT,
  SET_CURRENT_PAGE, IS_FETCHING, FOLLOW_BTN_STATUS, SET_ME, SET_ME_ERROR,
  GET_USER_PROFILE, SET_USER_STATUS, SET_USER_PHOTO, SET_USER_INFO
} from "./typeAction";

export const likesAC = () => ({ type: INCREMENT_LIKES })
export const dislikeAC = () => ({ type: DECREMENT_LIKES })

export const handleChangeAC = (text) => ({ type: TEXT_TYPING, text })

export const keyPressAC = () => {
  return {
    type: TEXT_TYPING_ADDPOST
  }
}

export const addPostAC = (text) => {
  return {
    type: CREATE_POST,
    text
  }
}

export const delPostAC = (id) => {
  return {
    type: DELETE_POST,
    id
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const toggleFollow = (id) => {
  return {
    type: TOGGLE_FOLLOW,
    id
  }
}

export const followBtnStatus = (id, isFetching) => {
  return {
    type: FOLLOW_BTN_STATUS,
    id,
    isFetching
  }
}

export const isFetching = (payload) => {
  return {
    type: IS_FETCHING,
    payload
  }
}

export const setTotalCount = (count) => {
  return {
    type: SET_TOTAL_COUNT,
    count
  }
}


export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload
  }
}

//profile user

export const getUserProfile = (payload) => ({
  type: GET_USER_PROFILE,
  payload
})

export const setUserStatus = (payload) => ({
  type: SET_USER_STATUS,
  payload
})

export const setUserPhoto = (payload) => ({
  type: SET_USER_PHOTO,
  payload
})

export const setUserInfo = (payload) => ({
  type: SET_USER_INFO,
  payload
})

//authorized

export const setMe = (data, isAuth, error) => {
  return {
    type: SET_ME,
    payload: data,
    isAuth,
    error
  }
}
export const setMeError = (error) => {
  return {
    type: SET_ME_ERROR,
    error
  }
}

