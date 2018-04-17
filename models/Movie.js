import mongoose, { Schema } from "mongoose";

const MovieModel = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  seen: {
    type: Boolean,
    required: true
  }
});

export default mongoose.model("Movie", MovieModel);
