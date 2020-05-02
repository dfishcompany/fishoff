const assert = require("assert");
const { generateToken } = require("../common/otpToken");
const { get, create, update, deleteOne } = require("../model/order");
const order = {};


order.getAll = async (req, res, next) => {
    try{
        const data = await get();
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

order.getByUser = async (req, res, next) => {
    try{
        const data = await get({ userID: req.params.userID });
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

order.createOne = async (req, res, next) => {
    try{
        assert(req.body.orderDetail, "orderDetail is required");
        assert(req.body.total, "total is required");
        req.body.userID = req.params.userID;
        req.body.status = "initiated";
        const data = await create(req.body);
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

order.updateStatus = async (req, res, next) => {
    try{
        assert(req.body.status, "status is required");
        const data = await update(req.params.orderID, { status: req.body.status } );
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

order.deleteOne = async (req, res, next) => {
    try{
        const data = await deleteOne(req.params.orderID);
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

module.exports = order;