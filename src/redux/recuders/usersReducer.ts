import { UserType } from "./../../utils/types/types";
import { ActionTypes } from "../../utils/types/types"

export type InitialStateType = {
  users: Array<UserType>
  totalCount: number
  pageNum: number
  isFollowBtnFetching: Array<Number>
  isFetching: boolean
  usersPortion: number
  userSearch: string
  isUserFriend: string
}

const initialState: InitialStateType = {
  users: [],
  totalCount: 15,
  pageNum: 1,
  isFollowBtnFetching: [],
  isFetching: false,
  usersPortion: 30,
  isUserFriend: '',
  userSearch: ''
}

export const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: [...state.users, ...action.payload],
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        users: []
      }
    case 'TOGGLE_FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: !u.followed }
          }
          return u
        })
      }
    case 'FOLLOW_BTN_STATUS':
      return {
        ...state,
        isFollowBtnFetching: action.isFetching
          ? [...state.isFollowBtnFetching, action.id]
          : state.isFollowBtnFetching.filter(id => id !== action.id)
      }
    case 'IS_FETCHING':
      return {
        ...state,
        isFetching: action.payload
      }
    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalCount: action.count
      }
    case 'SET_PAGE_NUM':
      return {
        ...state,
        pageNum: action.payload
      }
    case 'SET_USER_SEARCH':
      return {
        ...state,
        userSearch: action.payload
      }
    case 'SET_IS_USER_FRIEND':
      return {
        ...state,
        isUserFriend: action.payload
      }
    default:
      return state
  }
}


