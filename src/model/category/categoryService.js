const category = require("./categoryModel");

const categoryService = {};

categoryService.getAll = (data) => category.find(data);

categoryService.getByID = (id) => category.findById({ _id : id });

categoryService.createOne = (data) => category.create(data);

categoryService.edit = (id,data) => category.findByIdAndUpdate({ _id : id }, data );

categoryService.deleteOne = (id) => category.findByIdAndDelete({ _id : id });

module.exports = categoryService;