import { setTotalCount } from "../action"
import { usersReducer } from "./usersReducer"


const state = {
  users: [],
  totalCount: 15,
  isFollowBtnFetching: [],
  isFetching: false,
}
test('total cotal counts must be 2000', () => {
  let action = setTotalCount(2000)
  let newState = usersReducer(state, action)
  console.log(state);
  expect(newState.totalCount).toBe(2000)
})
// export const usersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_USERS:
//       return {
//         ...state,
//         users: action.users,
//       }
//     case TOGGLE_FOLLOW:
//       return {
//         ...state,
//         users: state.users.map(u => {
//           if (u.id === action.id) {
//             return { ...u, followed: !u.followed }
//           }
//           return u
//         })
//       }
//     case FOLLOW_BTN_STATUS:
//       return {
//         ...state,
//         isFollowBtnFetching: action.isFetching
//           ? [...state.isFollowBtnFetching, action.id]
//           : state.isFollowBtnFetching.filter(id => id !== action.id)
//       }
//     case IS_FETCHING:
//       return {
//         ...state,
//         isFetching: action.payload
//       }
//     case SET_TOTAL_COUNT:
//       return {
//         ...state,
//         totalCount: action.count
//       }
//     default:
//       return state
//   }
// }


