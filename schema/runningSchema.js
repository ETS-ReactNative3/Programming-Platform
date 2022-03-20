// Import Modules
const mongoose = require("mongoose"),
    moment = require("moment");

// constant variables
const reqString = { type: String, required: true },
    reqBool = { type: Boolean, required: true, default: false },
    dateStringWithTime = moment(new Date()).format('YYYY-MM-DD HH:MM:SS');

// Schema
const ansSchema = new mongoose.Schema({
    date: {
        type: String,
        default: dateStringWithTime
    },
    input: reqString,
    quesid: reqString,
    userid: reqString,
    ansPython: reqString,
    language: { type: String, required: false, default: "python3" }
})

var AnsSchema = mongoose.model("Answer", ansSchema);

// Export Schema
module.exports = AnsSchema