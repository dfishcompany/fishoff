const router = require("express").Router();

const foodItem = require("./foodItem");
const category = require("./category");

router.use("/category", category);
router.use("/foodItem", foodItem);

module.exports = router;