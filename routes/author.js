const authorController = require("../controllers/authorController");

const router = require("express").Router();

//add author
router.post("/", authorController.addAuthor);

//get all authors
router.get("/", authorController.getAllAuthor);

module.exports = router;
