import { RootState } from "./../store";
import { createSelector } from "@reduxjs/toolkit"
import { useAppSelector } from "../../hooks/hooks";

const usersSelector = useAppSelector(state => state.usersReducer.users)

// const users = createSelector(
//   usersSelector, u => u 
// )

