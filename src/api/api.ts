import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': 'e55d182f-228d-4cfc-a08e-1e768b361a21' }
})
