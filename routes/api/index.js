const router = require("express").Router();
const revenue = require("./revenue");
const user = require("./user");

// Book routes
router.use("/revenue", revenue);
router.use("/user", user);

module.exports = router;
