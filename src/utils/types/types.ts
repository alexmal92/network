import { ThunkAction } from "redux-thunk";
import { Dispatch, SetStateAction } from 'react'
import * as actions from '../../redux/actions'
import { RootState } from "../../redux/store";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

// type props useState 
export type TypeUseStateDispatch<T> = Dispatch<SetStateAction<T>>

export type Thunk = ThunkAction<Promise<void>, RootState, unknown, ActionTypes>


// server response
export type ResType<D = {}> = {
  resultCode: number
  fieldsErrors: Array<string>
  messages: Array<string>
  data: D
}

export type UserType = {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean
  uniqueUrlName: string
}

export type UsersType = {
  items: Array<UserType>
  totalCount: number
  error: string
}

export type UserProfileType = {
  aboutMe: string
  contacts: ContactsType
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: PhotosType
  userId: number
}

export type PhotosType = {
  small: string | undefined
  large: string | undefined
}

export type ContactsType = {
  [key: string]: string
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type AuthType = {
  id: number | null
  email: string | null
  login: string | null
}