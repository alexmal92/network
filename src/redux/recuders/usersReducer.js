import { SET_USERS, TOGGLE_FOLLOW, SET_TOTAL_COUNT, IS_FETCHING, FOLLOW_BTN_STATUS, SET_CURRENT_PAGE } from "../typeAction"


const initialState = {
  users: [],
  totalCount: 15,
  currentPage: 1,
  isFollowBtnFetching: [],
  isFetching: false,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: !u.followed }
          }
          return u
        })
      }
    case FOLLOW_BTN_STATUS:
      return {
        ...state,
        isFollowBtnFetching: action.isFetching
          ? [...state.isFollowBtnFetching, action.id]
          : state.isFollowBtnFetching.filter(id => id !== action.id)
      }
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.count
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    default:
      return state
  }
}


