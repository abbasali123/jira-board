import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    max: 200,
  },
});

export default mongoose.model("Tasks", TaskSchema);
