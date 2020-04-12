const { getAll, getByID, createOne, edit, deleteOne } = require("../model/category");
const category = {};

category.getAll = async (req, res, next) => {
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

category.getOne = async (req, res, next) => {
    try{
        const data = await getByID(req.params.categoryID);
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

category.create = async (req, res, next) => {
    try{
        const data = await createOne(req.body);
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

category.edit = async (req, res, next) => {
    try{
        const data = await edit(req.params.categoryID, req.body);
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

category.deleteOne = async (req, res, next) => {
    try{
        const data = await deleteOne(req.params.categoryID);
        res.status(200).json({
            status : true,
            message : "success",
            data
        });
    }catch(e){
        next(e);
    }
};

module.exports = category;