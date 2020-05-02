const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "profile"
    },
    orderDetail: [{
        item : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "foodItem"
        },
        quantity:{
            type: String
        },
        price:{
            type: String
        }
    }],
    total: {
        type: String
    },
    status: {
        type: String,
        enum: ["delivered","initiated"]
    }
},{
    timestamps : true
});

module.exports = mongoose.model("order",orderSchema);