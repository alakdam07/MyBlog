const { Router } = require("express");
const router = Router();
const formSubmit = require("../models/models");

router.get("/", async (req, res) => {
  try {
    const entrries = await formSubmit.find();
    res.json(entrries);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const logs = new formSubmit(req.body);
    const entry = await logs.save();
    res.json(entry);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
