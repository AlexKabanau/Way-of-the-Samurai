import { instance } from './api';

export const securityAPI = {
  getCaptchUrl() {
    return instance.get(`security/get-captcha-url`).then((res) => res.data);
    // .then(response => response.data)
  },
};
