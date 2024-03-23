const add = require('../DB/update');
const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {

    const { username, email, number, event } = req.body;
    const user = {
        username: username,
        email: email,
        number: number,
        event: event
    }
    if (!username || !email || !number || !event) {
        throw new CustomAPIError('Please fill in all details', 404);
    }

    const id = new Date().getDate() + Math.random;

    res.status(200).json({ msg: 'User signed n', user: user });
    console.log(user);
    add(user);

};

const dashboard = async (req, res) => {

    console.log(req.headers.authorization);
}

module.exports = {
    login,
    dashboard
};
