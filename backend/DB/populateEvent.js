// populateDB.js
const mongoose = require('mongoose')
const connectDB = require('./connect');
const eventModel = require('../models/eventDetails');
require('dotenv').config();
const jd1 = new eventModel({
    name: "Advitya",
    id: "A",
    usersList: [],
    totalEntry: 0

})
const jd2 = new eventModel({
    name: "Vitopia",
    id: "B",
    usersList: [],
    totalEntry: 0

})
const jd3 = new eventModel({
    name: "Riviera",
    id: "C",
    usersList: [],
    totalEntry: 0

})
const jd4 = new eventModel({
    name: "Vibrance",
    id: "D",
    usersList: [],
    totalEntry: 0
}

)
const k = "mongodb+srv://dhingramehul296:12mehul345@cluster0.b1srurw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const populateDB = async () => {
    try {
        console.log(k);
        // console.log(k);
        await connectDB(k);
        await eventModel.deleteMany();
        await eventModel.create(jd1);
        await jd1.save();
        await jd2.save();
        await jd3.save();
        await jd4.save();
        console.log('Database populated successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error populating database:', error);
        process.exit(1);
    }
};

populateDB();
