const { getAll, getByID, createMany, createOne, edit, deleteOne } = require("../model/foodItem");
const foodItem = {};

foodItem.getAll = async (req, res, next) => {
    try{
        const data = await getAll();
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

foodItem.getByCategory = async (req, res, next) => {
    try{
        const data = await getAll({ categoryID : req.params.categoryID });
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

foodItem.getOne = async (req, res, next) => {
    try{
        const data = await getByID(req.params.foodItemID);
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

foodItem.create = async (req, res, next) => {
    try{
        const data = await createOne({...req.body, categoryID : req.params.categoryID});
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

foodItem.createMany = async (req, res, next) => {
    try{
        const foodItem = req.body.foodItem.map((data) => { return { ...data ,categoryID : req.params.categoryID} });
        const data = await createMany(foodItem);
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

foodItem.edit = async (req, res, next) => {
    try{
        console.log("revevfe");
        const data = await edit(req.params.foodItemID, req.body);
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

foodItem.deleteOne = async (req, res, next) => {
    try{
        const data = await deleteOne(req.params.foodItemID);
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

module.exports = foodItem;