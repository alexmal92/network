import { ResType } from "../utils/types/types"
import { instance } from "./api"

type MeType = {
  id: number
  email: string
  login: string
}

type LoginDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: string
}

export const authAPI = {
  async me() {
    return instance.get<ResType<MeType>>(`auth/me`)
      .then(response => response.data)
  },
  async login(data: LoginDataType) {
    const { email, password, rememberMe, captcha } = data
    return instance.post<ResType<{ userId: number }>>(`auth/login`, { email, password, rememberMe, captcha })
      .then(response => response.data)
  },
  async captcha() {
    return instance.get<{ url: string }>(`security/get-captcha-url`)
      .then(response => response.data)
  },
  async logout() {
    return instance.delete<ResType>(`auth/login`)
      .then(response => response.data)
  },
}