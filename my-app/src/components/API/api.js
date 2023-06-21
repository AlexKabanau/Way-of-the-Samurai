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
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
    .then(response => response.data)
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`)
    .then(response => response.data)
  },
}
export const profileAPI = {
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
}

export const authAPI = {
  authMe() {

    return instance.get(`auth/me`)
      .then(response => response.data)
  }
}

