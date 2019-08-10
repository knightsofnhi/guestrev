const router = require("express").Router();
const revenue = require("./revenue");

// Book routes
router.use("/revenue", revenue);

module.exports = router;
