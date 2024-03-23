// populateDB.js
const mongoose = require('mongoose')
const connectDB = require('./connect');
const userModel = require('../models/users');
require('dotenv').config();

const jsonData =
{
    username: "mehul",
    email: "dhingrajd@gmail.com",
    number: 8448327120,
    event: "V"
};
const k = "mongodb+srv://dhingramehul296:12mehul345@cluster0.b1srurw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const populateDB = async () => {
    try {
        console.log(k);
        // console.log(k);
        await connectDB(k);
        await userModel.create(jsonData);
        console.log('Database populated successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error populating database:', error);
        process.exit(1);
    }
};

populateDB();
