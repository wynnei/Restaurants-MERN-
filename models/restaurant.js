const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    cuisineType:{
        type:String,
    },
    location:{
        type:String,
    },
    //image shown as string
    selectedFile:{
        type:String,
    },
    
})

module.exports = mongoose.model("Note",noteSchema) 