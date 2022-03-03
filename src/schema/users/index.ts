import * as yup from "yup";

export const UserSchema = yup.object({
  _id: yup.number().required(),
  email: yup.string().max(200, "Must be 200 characters or less"),
  username: yup
    .string()
    .required("Required")
    .max(200, "Must be 200 characters or less"),
  role: yup.mixed().oneOf(["user", "admin"]), //enum will accept these two values only
});
export type User = yup.InferType<typeof UserSchema>;
