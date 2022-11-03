import { UserProfileType } from "./../../utils/types/types";
import { ActionTypes, AuthType } from '../../utils/types/types'

interface InitialStateType {
  data: AuthType
  isAuth: boolean
  error: boolean
  user: UserProfileType | undefined
}


const initialState: InitialStateType = {
  data: {
    id: null,
    email: null,
    login: null
  },
  isAuth: false,
  error: false,
  user: undefined,
}


export function authReducer(state = initialState, action: ActionTypes): InitialStateType {
  switch (action.type) {
    case 'SET_ME':
      return {
        ...state,
        data: action.payload,
        isAuth: action.isAuth,
        error: action.error
      }
    case 'SET_ME_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'GET_ME_PROFILE':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
