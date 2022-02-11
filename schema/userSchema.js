// Import Modules
const mongoose = require("mongoose"),
    moment = require("moment");

// constant variables
const reqString = { type: String, required: true },
    reqBool = { type: Boolean, required: true, default: false },
    dateStringWithTime = moment(new Date()).format('YYYY-MM-DD HH:MM:SS');

// Schema
const userSchema = new mongoose.Schema({
    email: reqString,
    username: reqString,
    password: reqString,
    date: {
        type: String,
        default: dateStringWithTime
    },
    solvedQuestions: [reqString],
    solvedAnswers: [reqString],
    admin: reqBool
})

// Export Schema
module.exports = mongoose.model("User", userSchema)