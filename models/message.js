const mongoose = require("mongoose");

let messageSchema = mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Message-board",messageSchema);