import { UsersType } from "../utils/types/types"
import { instance } from "./api"

export const usersAPI = {
  async setUsers(pageCount = 40, pageNum = 1, term: string, friend: string) {
    return instance.get<UsersType>(`users?count=${pageCount}&page=${pageNum}`
      + (term === ''? '' : `&term=${term}`)
      + (friend === '' ? '' : `&friend=${friend}`))
      .then(response => response.data)
  }
}