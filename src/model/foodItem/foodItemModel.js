const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
    name : {
        type : String
    },
    categoryID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    images : [{
        type : String,
        default : []
    }],
    description : {
        type : String
    },
    price : {
        type : String
    },
    fish : {
        type : Boolean
    }
},{
    timestamps : true
});

module.exports = mongoose.model("foodItem",foodItemSchema);