export type PostType = {
  id: number;
  message: string;
  name: string;
  age: number;
  likesCount: number;
};
export type PhotosType = {
  small: string | null;
  large: string | null;
};
export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};
export type UserType = {
  id: number;
  name: string;
  status: null;
  photos: PhotosType;
  followed: boolean;
};
