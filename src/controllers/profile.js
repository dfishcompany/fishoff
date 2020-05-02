const assert = require("assert");
const { generateToken } = require("../common/otpToken");
const { get, create, deleteOne } = require("../model/profile");
const profile = {};


profile.getAll = async (req, res, next) => {
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

profile.login = async (req, res, next) => {
    try{
        assert(req.body.phone, "phone is required");
        await create(req.body);
        let data = await get({ phone: req.body.phone });
        console.log(data,"data");
        data = data[0]._doc;
        const token = await generateToken({ otp: Math.floor(Math.random() * (999999 - 100000) + 100000) });
        data = { ...data, token}
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

profile.deleteOne = async (req, res, next) => {
    try{
        const data = await deleteOne(req.params.profileID);
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

module.exports = profile;