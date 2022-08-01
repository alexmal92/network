import { combineReducers } from "redux";
import { userProfileReducer } from './recuders/userProfileReducer';
import { likeReducer } from './recuders/likeReducer'
import { usersReducer } from "./recuders/usersReducer";
import { authReducer } from "./recuders/authReducer";


export const rootReducers = combineReducers({
  likeReducer,
  userProfileReducer,
  usersReducer,
  authReducer
})