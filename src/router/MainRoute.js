const express = require("express");
const router = express.Router();

const MainController = require("../controller/MainController")
const SaveRecipe = require("../controller/SaveRecipe")

router.route("/api/v1/save-recipe-data").post(SaveRecipe.saveRecipe);
router.route("/api/v1/get-recipes").get(MainController.getRecipe);
router.route("/api/v1/save-comment-data").post(MainController.updateComments)

module.exports = router;