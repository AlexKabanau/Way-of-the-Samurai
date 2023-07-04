import * as yup from "yup"

export const basicSchema = yup.object().shape({
  newPostText: yup
  .string()
  .min(2, 'Too Short!')
  .max(10, 'Too Long!') 
  .required("Required")
})

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

