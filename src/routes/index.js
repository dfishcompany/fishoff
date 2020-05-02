const router = require("express").Router();

const checkOtp = require("../middleware/checkOtp");

const foodItem = require("./foodItem");
const category = require("./category");
const profile = require("./profile");
const order = require("./order");

router.use("/category", category);
router.use("/foodItem", foodItem);
router.use("/profile", profile);
router.use("/order", order);
router.post("/checkOtp", checkOtp, (req,res) => {
    res.status(200).json({
        status: true,
        message: "OTP verified"
    })
})

module.exports = router;