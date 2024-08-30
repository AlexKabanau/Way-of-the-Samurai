import { GetItemsType, instance, APIResponseType } from './api';
import { profileAPI } from './profile-api';

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) {
    return instance
      .get<GetItemsType>(
        `users?page=${currentPage}&count=${pageSize}&term=${term}` +
          (friend === null ? '' : `&friend=${friend}`),
      )
      .then((response) => response.data);
  },
  unfollowUser(userId: number) {
    return instance.delete(`follow/${userId}`).then((response) => response.data) as Promise<
      APIResponseType
    >;
  },
  followUser(userId: number) {
    return instance.post<APIResponseType>(`follow/${userId}`).then((response) => response.data);
  },
  // getProfile(userId: number) {
  //   console.warn('Obsolete method. Please use profileAPI object.');
  //   return profileAPI.getProfile(userId);
  // },
};
