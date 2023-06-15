import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a6235f60-17e5-4077-a023-12c9679f93bf"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {

    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`)
    .then(response => response.data)
  },
  followUser(id) {
    return instance.post(`follow/${id}`)
    .then(response => response.data)
  },
}

export const authAPI = {
  authMe() {

    return instance.get(`auth/me`)
      .then(response => response.data)
  }
}

