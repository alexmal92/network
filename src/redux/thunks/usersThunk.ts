import { setPageNum } from "./../actions";
import { isFetching, setTotalCount, setUsers, toggleFollow, followBtnStatus } from "../actions"
import { usersAPI } from "../../api/usersAPI"
import { followAPI } from "../../api/followAPI"
import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import { ActionTypes } from "../../utils/types/types"

export const getUsers = (pageCount: number, pageNum: number, term: string = '', friend: string = ''): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
  dispatch(isFetching(true))
  try {
    const res = await usersAPI.setUsers(pageCount, pageNum, term, friend)
    if (res.error === null) {
      dispatch(setTotalCount(res.totalCount))
      dispatch(setUsers(res.items))
      dispatch(isFetching(false))
      return
    }
    throw new Error(res.error)
  } catch (e) {
    console.log(e)
    dispatch(isFetching(false))
  }
}

export const userFollow = (userID: number): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
  dispatch(followBtnStatus(userID, true))
  let res = await followAPI.follow(userID)
  if (res.data.resultCode === 0) {
    dispatch(toggleFollow(userID))
  }
  dispatch(followBtnStatus(userID, false))
}

export const userUnfollow = (userID: number): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
  dispatch(followBtnStatus(userID, true))
  let res = await followAPI.unfollow(userID)
  if (res.data.resultCode === 0) {
    dispatch(toggleFollow(userID))
  }
  dispatch(followBtnStatus(userID, false))
}