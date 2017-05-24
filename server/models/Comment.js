import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const commentSchema = new Schema({
  text: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: {type: Date, default: Date.now},
  _author: { type: Schema.ObjectId, ref: 'User' },
  _post: {type: Schema.ObjectId, ref: 'Post'}
});

const populateAuthor = function(next) {
  this.populate({
    path: '_author',
    select: 'username -_id'
  });
  next();
};

commentSchema.pre('find', populateAuthor);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
