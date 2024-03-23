const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
const { UnAuth } = require("../errors");
const User = require('../models/users')
const tokenVerify = async (req, res, next) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;

    if (!token) {
        throw new UnAuth(" Not Authorized to access ")
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, user } = decoded;
        console.log(user);
        console.log(User.findOne(user));
        next();
    } catch (error) {
        throw new UnAuth("User is unauthorized to access this")
    };
}
module.exports = authenticationMiddleware; 
