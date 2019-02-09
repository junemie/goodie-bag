const Sequelize = require("sequelize");
const db = require("../database");

const image =
  "/Users/jungmishosoya/Desktop/Junior Phase/goodie-bag/public/favicon.ico";

module.exports = db.define("candy", {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    }
  },
  //Quick question on if the value of the image actully matters or not!
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: image
  }
});
