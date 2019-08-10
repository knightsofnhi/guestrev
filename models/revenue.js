const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// What is our revenue schema going to look like?
const revenueSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    property: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    }
});

const Revenue = mongoose.model("Revenue", revenueSchema);

module.exports = Revenue;
