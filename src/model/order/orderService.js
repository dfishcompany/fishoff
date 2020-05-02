const order = require("./orderModel");

const orderService = {};

orderService.get = (data) => order.find(data).populate('userID').populate('orderDetail.item').sort({ _id: -1 });

orderService.create = (data) => order.create(data);

orderService.update = (id, data) => order.findByIdAndUpdate({ _id: id}, data);

orderService.deleteOne = (id) => order.findByIdAndDelete({ _id : id });

module.exports = orderService;