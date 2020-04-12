const foodItem = require("./foodItemModel");

const foodItemService = {};

foodItemService.getAll = (data) => foodItem.find(data);

foodItemService.getByID = (id) => foodItem.findById({ _id : id });

foodItemService.createOne = (data) => foodItem.create(data);

foodItemService.createMany = (data) => foodItem.insertMany(data);

foodItemService.edit = (id,data) => foodItem.findByIdAndUpdate({ _id : id }, data );

foodItemService.deleteOne = (id) => foodItem.findByIdAndDelete({ _id : id });

module.exports = foodItemService;