const mongoose = require("mongoose");
const connectDB = require("../mongooes");

const userSchema = new mongoose.Schema({ 
    description:{
        type: String,
    }, 
    recipeName: {
     type: String,
    },
    ingredients:{
        type: Array,
    },
    snapshort: {
        type: String,
    },
    preparationMethod:{
        type: String
    },
    preparationVideo:{
        type: String
    },
    comments:[{type:String}]
});

var userModel = connectDB.model('Recipe', userSchema);
module.exports = userModel;