const { Author, Book } = require("../model/model");

const bookController = {
  //add a book
  addABook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      if (req.body.author) {
        // const author = Author.find({ _id: req.body.author });
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { books: savedBook._id } });
      }
      res.status(200).json(savedBook);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //get all books
  getAllBooks: async (req, res) => {
    try {
      const allBooks = await Book.find();
      res.status(500).json(allBooks);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
