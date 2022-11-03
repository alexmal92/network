import { dialogsApi } from "./../api/dialogsApi";
import { chatSlice } from "./slices/chat-slice";
import { combineReducers } from "redux";
import { userProfileReducer } from './recuders/userProfileReducer';
import { likeReducer } from './recuders/likeReducer'
import { usersReducer } from "./recuders/usersReducer";
import { authReducer } from "./recuders/authReducer";


export const rootReducer = combineReducers({
  likeReducer,
  userProfileReducer,
  usersReducer,
  authReducer,
  chatSlice: chatSlice.reducer,
  [dialogsApi.reducerPath]: dialogsApi.reducer
})