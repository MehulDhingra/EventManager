const add = require('../DB/update');
const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {

    const { username, email, number, password } = req.body;
    const user = {
        username: username,
        email: email,
        number: number,
        password: password
    }
    console.log(user);
    if (!username || !email || !number || !password) {
        throw new CustomAPIError('Please fill in all details', 404);
    }

    const savedObj = await add(user);
    res.status(200).json({ msg: 'User signed up ', user: savedObj });
};

const dashboard = async (req, res, next) => {
    try {

        console.log(req.user);
        const obj = req.user;
        const myObj = {
            _id: obj._id.toString(),
            username: obj.username,
            email: obj.email,
            number: obj.number,
            password: obj.password,
        };
        const token = jwt.sign(myObj, process.env.JWT_SECRET, { expiresIn: '10d' });
        const finalObj = { token: token, userObj: myObj }
        // console.log(finalObj);

        // const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);
        res.status(200).send(finalObj);

    }

    catch (err) {
        res.status(200).json({msg:"Authentication Failed"});
    }
}

module.exports = {
    login,
    dashboard
};
