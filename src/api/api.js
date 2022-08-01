import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': 'e55d182f-228d-4cfc-a08e-1e768b361a21' }
})

export const userProfileAPI = {
  getProfile(id) {
    return instance.get(`profile/${id}`)
      .then(response => response.data)
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`)
      .then(response => response.data)
  },
  setStatus(status) {
    return instance.put(`profile/status/`, { status: status })
      .then(response => response.data)
  },
  setPhoto(img) {
    const formData = new FormData();
    formData.append('image', img);
    return instance.put(`profile/photo/`, formData,
      // {headers: {
      //   'Content-Type': 'multipart/form-data',
      // }}
    )
      .then(response => response.data)
  },
  setProfile(userInfo) {
    return instance.put(`profile`, userInfo)
      .then(response => response.data)
  },

}

export const usersAPI = {
  setUsers(pageCount = 10, pageNum = 1) {
    return instance.get(`users?count=${pageCount}&page=${pageNum}`)
      .then(response => response.data)
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`, {
    })
  },
  follow(id) {
    return instance.post(`follow/${id}`)
  }
}


export const authAPI = {
  me() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  },
  login(email, password, rememberMe) {
    return instance.post(`auth/login`, { email, password, rememberMe })
      .then(response => response.data)
  },
  logout() {
    return instance.delete(`auth/login`)
      .then(response => response.data)
  }
}


