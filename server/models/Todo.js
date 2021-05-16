import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  complete: {
      type: Boolean,
      default: false
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Todo", todoSchema);
