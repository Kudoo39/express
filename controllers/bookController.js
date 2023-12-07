const { Author, Book } = require("../model/model");

const bookController = {
  //add a book
  addABook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
