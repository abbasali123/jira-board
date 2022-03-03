import * as yup from "yup";

export const TaskSchema = yup.object({
  _id: yup.number().required(),
  title: yup.string().max(200, "Must be 200 characters or less"),
});

export type Task = yup.InferType<typeof TaskSchema>;
