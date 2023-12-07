const bookController = require("../controllers/bookController");

const router = require("express").Router();

//add a book
router.post("/", bookController.addABook);

//get all books
router.get("/", bookController.getAllBooks);

module.exports = router;
