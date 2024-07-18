import { instance, APIResponseType, ResultCodeForCaptureEnum, ResultCodesEnum } from './api';
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
    return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then((res) => res.data);
    // .then(response => response.data)
  },
  login(email: string, password: string, rememberMe = false, captcha = null as null | string) {
    debugger;
    return instance
      .post<APIResponseType<LoginResponseDataType, ResultCodeForCaptureEnum | ResultCodesEnum>>(
        `auth/login`,
        {
          email,
          password,
          rememberMe,
          captcha,
        },
      )
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`auth/login`);
    // .then(response => response.data)
  },
};
