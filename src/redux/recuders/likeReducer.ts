import { ActionTypes } from '../../utils/types/types'

type InitialStateType = {
  likes: number
}

const initialState: InitialStateType = {
  likes: 3,
}

export const likeReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return {
        ...state,
        likes: state.likes + 1
      }
    case 'DECREMENT_LIKES':
      return {
        ...state,
        likes: state.likes - 1
      }

    default:
      return state
  }
}