import db from './../models';

let postController = {};

postController.getAll = (req, res) => {
  db.Post.find({}).populate({
    path: '_author',
    select: 'username -_id'
  }).populate({
    path: '_comments',
    select: 'text createdAt _author',
    match: { 'isDeleted': false }
  }).then(posts => {
    res.status(200).json({
      success: true,
      data: posts
    });
  }).catch(err => {
    res.status(500).json({
      message: err.toString()
    });
  });
}

postController.post = (req, res) => {
  const { title, text, userId } = req.body;
  //Later, get userId by jwt

  //Validation here!

  const newPost = new db.Post({
    title,
    text,
    _author: userId
  });

  newPost.save().then((newPost) =>{
    res.status(200).json({
      success: true,
      data: newPost
    });
  }).catch((err) => {
    res.status(500).json({
      message: err.toString()
    });
  });
}



export default postController;
