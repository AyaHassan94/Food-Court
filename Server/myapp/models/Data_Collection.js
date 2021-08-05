const mongoose = require('mongoose')
const Schema = mongoose.Schema
// autoIncrement = require('mongoose-auto-increment');
// var connection = mongoose.createConnection("./dbConnection/mongo_connect");

// autoIncrement.initialize(connection);
const dataSchema = new Schema({
    StoreID: {
        type: Number,
        required: true,
        unique: true

    },
    StoreName: {
        type: String,
        required: true,
        unique: true
    },
    StoreDescription: {
        type: String,
        required: true,
         unique: true
    },
    StoreLogo: {
        type: String,
        required: true,
        unique: true
    }




})

  

// dataSchema.plugin(autoIncrement.plugin, { field: 'StoreID ' });


const dataModel = mongoose.model("Data_Collection" , dataSchema)
module.exports = dataModel;
