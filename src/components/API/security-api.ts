import { instance } from './api';

type GetCaptchUrlResponseType = {
  url: string;
};

export const securityAPI = {
  getCaptchUrl() {
    return instance
      .get<GetCaptchUrlResponseType>(`security/get-captcha-url`)
      .then((res) => res.data);
    // .then(response => response.data)
  },
};
