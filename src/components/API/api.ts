import axios from 'axios';
import { ProfileType } from '../../types/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a6235f60-17e5-4077-a023-12c9679f93bf',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollowUser(userId: number) {
    return instance.delete(`follow/${userId}`).then((response) => response.data);
  },
  followUser(userId: number) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  getProfile(userId: number) {
    console.warn('Obsolete method. Please use profileAPI object.');
    return profileAPI.getProfile(userId);
  },
};
export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile);
    // debugger
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile);
  },
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptureEnum {
  CaptureIsRequired = 10,
}

type MeResponseType = {
  data: { id: number; email: string; login: string };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
type LoginResponseType = {
  data: { userId: number };
  resultCode: ResultCodesEnum | ResultCodeForCaptureEnum;
  messages: Array<string>;
};
export const authAPI = {
  authMe() {
    return instance.get<MeResponseType>(`auth/me`).then((res) => res.data);
    // .then(response => response.data)
  },
  login(email: string, password: string, rememberMe = false, captcha = null as null | string) {
    debugger;
    return instance
      .post<LoginResponseType>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`auth/login`);
    // .then(response => response.data)
  },
};
export const securityAPI = {
  getCaptchUrl() {
    return instance.get(`security/get-captcha-url`);
    // .then(response => response.data)
  },
};
