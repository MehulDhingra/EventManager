const User = require('../models/users');

const add = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    console.log("Successfully pushed data");
  } catch (err) {
    console.log(err);
  }
};

module.exports = add;
