const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;