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
  getProfile(userId) {
    console.warn('Obsolete method. Please use profileAPI object.')
    return profileAPI.getProfile(userId)
  }
}
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    // debugger
    return instance.put(`profile/photo`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
},
saveProfile(profile) {
    return instance.put(`profile`, profile );
}
}

export const authAPI = {
  authMe() {

    return instance.get(`auth/me`)
      // .then(response => response.data)
  },
  login(email, password, rememberMe = false, captcha = null) {
    debugger
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha
    })
      .then(response => response.data)
  },
  logout() {

    return instance.delete(`auth/login`)
      // .then(response => response.data)
  },
}
export const securityAPI = {
  getCaptchUrl() {

    return instance.get(`security/get-captcha-url`)
      // .then(response => response.data)
  },
  
}

