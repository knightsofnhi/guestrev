const router = require("express").Router();
const reservationContoller = require("../../controllers/reservationController");

// Matches with "/api/reservation"
router
  .route("/")
  .get(reservationContoller.findAll)
  .post(reservationContoller.create);

// Matches with "/api/reservation/:id"
router
  .route("/:id")
  .get(reservationContoller.findById)
  .put(reservationContoller.update)
  .delete(reservationContoller.remove);

module.exports = router;
