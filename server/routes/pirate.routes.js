const express = require("express");
const PirateRouter = express.Router();

const {
    createPirate,
    findAllPiratesSorted,
    findOnePirateByID,
    updateOnePirate,
    deleteOnePirate,
} = require("../controllers/pirate.controller");

PirateRouter
    .route('/')
    .get(findAllPiratesSorted)
    .post(createPirate);

PirateRouter
    .route('/:id')
    .get(findOnePirateByID)
    .put(updateOnePirate)
    .delete(deleteOnePirate);

module.exports = PirateRouter;