//import router
const router = require("express").Router();

//Need to require models here:
const { Candy } = require("../db");

//api/candies: show all the candies
router.get("/", async (req, res, next) => {
  try {
    let allCandy = await Candy.findAll();
    res.send(allCandy);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let singleCandy = await Candy.findById(req.params.id);
    res.json(singleCandy);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let candy = await Candy.findById(req.params.id);
    let updatedCandy = await candy.update(req.body);
    res.json(updatedCandy);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
