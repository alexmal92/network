import { DECREMENT_LIKES, INCREMENT_LIKES } from "../typeAction";

const initialState = {
  likes: 3,
}

export const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_LIKES:
      return {
        ...state,
        likes: state.likes + 1
      }
    case DECREMENT_LIKES:
      return {
        ...state,
        likes: state.likes - 1
      }

    default:
      return state
  }
}