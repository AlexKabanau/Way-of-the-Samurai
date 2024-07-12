import { GetItemsType, instance } from './api';
import { profileAPI } from './profile-api';

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
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
