import { instance } from './api';

export const securityAPI = {
  getCaptchUrl() {
    return instance.get(`security/get-captcha-url`);
    // .then(response => response.data)
  },
};
