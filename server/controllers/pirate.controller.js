const Pirate = require("../models/pirate.model");

/* CREATE */
const createPirate = (req, res) => {
    Pirate.create(req.body)
        .then((pirate) => res.status(201).json(pirate))
        .catch((err) => res.status(400).json(err));
};

/*  READ */
const findAllPiratesSorted = (req, res) => {
    Pirate.find()
        .sort({ name: 1 })
        .collation({ locale: "en", caseLevel: true })
        .then((pirates) => res.status(200).json(pirates))
        .catch((err) => res.status(400).json(err));
};

const findOnePirateByID = (req, res) => {
    const { id } = req.params;
    Pirate.findById(id)
        .then((pirate) => res.status(200).json(pirate))
        .catch((err) => res.status(400).json(err));
};

/* UPDATE */
const updateOnePirate = (req, res) => {
    const { id } = req.params;
    Pirate.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        .then((pirate) => res.status(200).json(pirate))
        .catch((err) => res.status(400).json(err));
};

/* DELETE */
const deleteOnePirate = (req, res) => {
    const { id } = req.params;
    Pirate.findByIdAndDelete(id)
        .then((pirate) => res.status(200).json(pirate))
        .catch((err) => res.status(400).json(err));
};

module.exports = { createPirate, findAllPiratesSorted, findOnePirateByID, updateOnePirate, deleteOnePirate };
