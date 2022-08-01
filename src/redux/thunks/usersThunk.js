import { isFetching, setTotalCount, setUsers, toggleFollow, followBtnStatus } from "../action"
import { usersAPI } from "../../api/api"

export const getUsers = (pageCount, pageNum) => (dispatch) => {
  dispatch(isFetching(true))
  usersAPI.setUsers(pageCount, pageNum).then(data => {
    dispatch(setTotalCount(data.totalCount))
    dispatch(setUsers(data.items))
    dispatch(isFetching(false))
  })
}

export const userFollow = (userID) => (dispatch) => {
  dispatch(isFetching(true))
  dispatch(followBtnStatus(userID, true))
  usersAPI.follow(userID).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(toggleFollow(userID))
    }
    dispatch(followBtnStatus(userID, false))
    dispatch(isFetching(false))
  })
}

export const userUnfollow = (userID) => (dispatch) => {
  dispatch(isFetching(true))
  dispatch(followBtnStatus(userID, true))
  usersAPI.unfollow(userID).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(toggleFollow(userID))
    }
    dispatch(followBtnStatus(userID, false))
    dispatch(isFetching(false))
  })
}
