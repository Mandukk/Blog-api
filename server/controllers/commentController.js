import db from './../models';

const commentController = {};

commentController.post = (req, res) => {
  const { authorId, text, postId } = req.body;

  //Validation

  const newComment = new db.Comment({
    text,
    _author: authorId,
    _post: postId
  });

  newComment.save().then(comment => {
    db.Post.findByIdAndUpdate(
      postId,
      { $push: { '_comments': newComment._id } }
    ).then(postCommented => {
      res.status(200).json({
        success: true,
        comment,
        postCommented
      });
    }).catch(err => {
      res.status(500).json({
        msg: err
      })
    });
  }).catch(err => {
    res.status(500).json({
      msg: err
    });
  });

};

export default commentController;
