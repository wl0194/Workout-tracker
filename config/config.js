const mongoose = require("mongoose");
const  db  = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports = { db, mongoose };