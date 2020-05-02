const profile = require("./profileModel");

const profileService = {};

profileService.get = (data) => profile.find(data);

profileService.create = (data) => profile.updateOne({ phone: data.phone }, data, { upsert: true });

profileService.deleteOne = (id) => profile.findByIdAndDelete({ _id : id });

module.exports = profileService;