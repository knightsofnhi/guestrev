const router = require("express").Router();
const reservation = require("./reservation");

// Book routes
router.use("/reservation", reservation);

module.exports = router;
