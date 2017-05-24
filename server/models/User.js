import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const toLower = em => {
  return em.toLowerCase();
}

const userSchema = new Schema({
  username: { type: String, required: true, minlength: 5 },
  password: { type: String, required: true, minlength: 8 },
  email: { type: String, set: toLower }
});

const User = mongoose.model('User', userSchema);

export default User;
