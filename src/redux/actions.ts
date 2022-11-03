import { AuthType, PhotosType, UserProfileType, UserType } from "../utils/types/types";

export const likesAC = () => ({ type: 'INCREMENT_LIKES' } as const)
export const dislikeAC = () => ({ type: 'DECREMENT_LIKES' } as const)
export const handleChangeAC = (text: string) => ({ type: 'TEXT_TYPING', text } as const)
export const keyPressAC = () => ({ type: 'TEXT_TYPING_ADDPOST' } as const)
export const addPostAC = (text: string) => ({ type: 'CREATE_POST', text } as const)
export const delPostAC = (id: number) => ({ type: 'DELETE_POST', id } as const)

//users
export const setUsers = (payload: Array<UserType>) => ({ type: 'SET_USERS', payload } as const)
export const toggleFollow = (id: number) => ({ type: 'TOGGLE_FOLLOW', id } as const)
export const followBtnStatus = (id: number, isFetching: boolean) => ({ type: 'FOLLOW_BTN_STATUS', id, isFetching } as const)
export const isFetching = (payload: boolean) => ({ type: 'IS_FETCHING', payload } as const)

//users filter
export const setTotalCount = (count: number) => ({ type: 'SET_TOTAL_COUNT', count } as const)
export const setPageNum = (payload: number) => ({ type: 'SET_PAGE_NUM', payload } as const)
export const setPagesCount = (payload: number) => ({ type: 'SET_PAGES_COUNT', payload } as const)
export const clearUsers = (payload: Array<UserType>) => ({ type: 'CLEAR_USERS', payload } as const)
export const setUserSearch = (payload: string) => ({ type: 'SET_USER_SEARCH', payload } as const)
export const setIsUserFriend = (payload: string) => ({ type: 'SET_IS_USER_FRIEND', payload } as const)

//profile user
export const getUserProfile = (payload: UserProfileType) => ({ type: 'GET_USER_PROFILE', payload } as const)
export const setUserStatus = (payload: string) => ({ type: 'SET_USER_STATUS', payload } as const)
export const setUserPhoto = (payload: PhotosType) => ({ type: 'SET_USER_PHOTO', payload } as const)
export const setUserInfo = (payload: string) => ({ type: 'SET_USER_INFO', payload } as const)

//authorized
export const setMe = (data: AuthType, isAuth: boolean, error: boolean) => ({ type: 'SET_ME', payload: data, isAuth, error } as const)
export const setMeError = (error: boolean) => ({ type: 'SET_ME_ERROR', error } as const)
export const getAuthProfile = (payload: UserProfileType) => ({ type: 'GET_ME_PROFILE', payload } as const)


