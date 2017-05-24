import db from './../models';

let postController = {};

postController.get = (req, res) => {
  db.Post.find({}).then(data => {
    res.status(200).json({
      success: true,
      posts: data
    });
  }).catch(err => {
    res.status(500).json({
      message: err
    });
  });
}

postController.post = (req, res) => {
  const { author, post } = req.body;

  //Validation here!

  const newPost = new db.Post({
    author,
    post
  });

  newPost.save().then((newUser) =>{
    res.status(200).json({
      success: true,
      data: newUser
    });
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
}



export default postController;
