const { Post } = require('../models');

const postData = [
  {
    title: 'Handlebars and why you should learn it!!',
    content: 'Handlebars is a basic template engine that will help you get the basics and improve/support your learning.',
    user_id: 1
    
  },
  {
    title: 'The truth about JavaScript',
    content: `Yeah! Its just great isn't, so full of fuctionalities and it can really adapt to anything you wish, dream or want!`,
    user_id: 2
  },
  {
    title: 'Why Sequelize???',
    content: 'Sequelize will really help you speed up the tedious process of having to write your own MySQL code and save you time',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;