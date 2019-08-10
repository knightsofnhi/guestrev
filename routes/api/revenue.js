const router = require("express").Router();
const revenueController = require("../../controllers/revenueController");

// Matches with "/api/revenue"
router
  .route("/")
  .get(revenueController.findAll)
  .post(revenueController.create);

// Matches with "/api/revenue/:id"
router
  .route("/:id")
  .get(revenueController.findById)
  .put(revenueController.update)
  .delete(revenueController.remove);

module.exports = router;
