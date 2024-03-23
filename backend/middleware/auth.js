const user = require('../models/users');
const jwt = require("jsonwebtoken");
const authenticationMiddleware = async (req, res, next) => {
  const { username, email, number, event } = req.body;
  const userAuth = {
    username: username,
    email: email,
    number: number,
    event: event
  }

  if (!userAuth) {
    throw new UnauthenticatedError('No info provided');
  }

  try {
    const obj = await user.findOne(userAuth);
    console.log(obj);
    const id = obj._id;
    const token = jwt.sign({ id, obj }, process.env.JWT_SECRET, { expiresIn: '2h' });
    req.headers.authorization = token;
    next();
  } catch (err) {
    res.status(404).send("User not found, please enter valid details or sign up first");
    return
  }
}

module.exports = authenticationMiddleware;
