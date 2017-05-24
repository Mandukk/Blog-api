import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const postSchema = new Schema({
  author: { type: String, required: true },
  post: { type: String, required: true },
  date: { type: Date, default: Date.now },
  likes: { type: Number, min: 0, default: 0 }
});

const Post = mongoose.model('Post', postSchema);

export default Post;
