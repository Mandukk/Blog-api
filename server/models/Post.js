import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const postSchema = new Schema({
  title: { type: String, required: true },
  _author: { type: Schema.ObjectId, ref: 'User' },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isDeleted: {type: Boolean, default: false},
  _comments: [{ type: Schema.ObjectId, ref: 'Comment'}]
});

const Post = mongoose.model('Post', postSchema);

export default Post;
