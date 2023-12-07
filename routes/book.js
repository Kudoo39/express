const bookController = require("../controllers/bookController");

const router = require("express").Router();

//add a book
router.post("/", bookController.addABook);

module.exports = router;
