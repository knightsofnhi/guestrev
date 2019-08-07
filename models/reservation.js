const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// What is our reservation schema going to look like?
const reservationSchema = new Schema({});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
