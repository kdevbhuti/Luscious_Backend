const mongoose = require("mongoose");

    var URL = 'mongodb://localhost:27017/Luscious';
    var dbOptions = {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }

var connectDB =  mongoose.createConnection(URL, dbOptions);
module.exports = connectDB;