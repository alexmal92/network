import { SET_ME, SET_ME_ERROR } from "../typeAction"

const initialState = {
  data: {
    id: null,
    email: null,
    login: null
  },
  isAuth: false,
  error: false
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ME:
      return {
        ...state,
        data: action.payload,
        isAuth: action.isAuth,
        error: action.error
      }
    case SET_ME_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
