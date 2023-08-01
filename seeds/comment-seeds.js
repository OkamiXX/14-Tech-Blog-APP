const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Amazing work!",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "Im glad i saw this",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "Great! Just Great!",
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;