import * as mongoose from 'mongoose';
export const Room = new mongoose.Schema({
  name: String,
  url: String,
  views: Number,
  currentTimeVideo: Number,
  currentStatusVideo: Boolean,
});
