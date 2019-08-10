const router = require("express").Router();
const revenueContoller = require("../../controllers/revenueController");

// Matches with "/api/revenue"
router
  .route("/")
  .get(revenueContoller.findAll)
  .post(revenueContoller.create);

// Matches with "/api/revenue/:id"
router
  .route("/:id")
  .get(revenueContoller.findById)
  .put(revenueContoller.update)
  .delete(revenueContoller.remove);

module.exports = router;
