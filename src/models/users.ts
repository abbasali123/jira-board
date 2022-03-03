import mongoose from "mongoose";
import type { User } from "@schema/users";
const Schema = mongoose.Schema;

const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      min: 6,
      max: 15,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      required: true,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
