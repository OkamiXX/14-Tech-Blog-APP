const { User } = require('../models');

const userData = [
  {
    username: 'youfriendlyalfred',
    password: 'pass1'
    
  },
  {
    username: 'carlinhosbuchecha',
    password: 'pass2'
  },
  {
    username: 'leomeeeehssi',
    password: 'pass3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;