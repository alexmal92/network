import { ResType, UserProfileType } from "../utils/types/types";
import { ContactsType, PhotosType } from "../utils/types/types";
import { instance } from "./api";


type ProfileType = {
  userId: number
  aboutMe: string
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}


export const profileAPI = {
  async getProfile(id: number) {
    return instance.get<UserProfileType>(`profile/${id}`)
    .then(response => response.data)

  },
  getStatus(id: number) {
    return instance.get<string>(`profile/status/${id}`)
      .then(response => response.data)
  },
  setStatus(status: string) {
    return instance.put<ResType>(`profile/status/`, { status: status })
      .then(response => response.data)
  },
  setPhoto(img: File) {
    const formData = new FormData();
    formData.append('image', img);
    return instance.put<ResType<PhotosType>>(`profile/photo/`, formData)
      .then(response => response.data)
  },
  setProfile(userInfo: ProfileType) {
    return instance.put<ResType>(`profile`, userInfo)
      .then(response => response.data)
  },

}