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
    let singleCandy = await Candy.findAll({
      where: { id: req.params.id }
    });
    res.json(singleCandy);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
