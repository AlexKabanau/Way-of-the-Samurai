import { instance, ResponseType, ResultCodeForCaptureEnum } from './api';
export type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};
export type LoginResponseDataType = {
  userId: number;
};
export const authAPI = {
  authMe() {
    return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then((res) => res.data);
    // .then(response => response.data)
  },
  login(email: string, password: string, rememberMe = false, captcha = null as null | string) {
    debugger;
    return instance
      .post<ResponseType<LoginResponseDataType>>(`auth/login`, {
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
