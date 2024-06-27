import * as yup from 'yup';

export const basicPostSchema = yup.object().shape({
  newPostText: yup
    .string()
    .min(2, 'Post is too short!')
    .max(10, 'Post is too Long!')
    .required('Required'),
  // newMessageBody: yup
  //   .string()
  //   .min(2, "Message is too short!" )
  //   .max(10, 'Message is too Long!')
  //   .required("Required"),
});
export const basicMessageSchema = yup.object().shape({
  // newPostText: yup
  //   .string()
  //   .min(2, "Post is too short!" )
  //   .max(10, 'Post is too Long!')
  //   .required("Required"),
  newMessageBody: yup
    .string()
    .min(2, 'Message is too short!')
    .max(10, 'Message is too Long!')
    .required('Required'),
});

// export const requiredField = (value) => {
//   if (value) {
//     return undefined
//   }
//   return 'Field is required'
// }
// export const maxLength30 = (value) => {
//   if (value && value.length > 30) {
//     return undefined
//   }
//   return 'Field is required'
// }
