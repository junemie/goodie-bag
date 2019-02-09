//import router
const router = require("express").Router();

//Need to require models here:
const { Candy } = require("../db");

//api/candy: show all the candies
router.get("/", async (req, res, next) => {
  try {
    let allCandy = await Candy.findAll();
    res.send(allCandy);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
