import { ResType } from "../utils/types/types"
import { instance } from "./api"

export const followAPI = {
  unfollow(id: number) {
    return instance.delete<ResType>(`follow/${id}`)
  },
  follow(id: number) {
    return instance.post<ResType>(`follow/${id}`)
  }
}