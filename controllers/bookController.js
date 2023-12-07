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
      res.status(200).json(allBooks);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //get a book
  getABook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate("author");
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //update a book
  updateABook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //delete a book
  deleteABook: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
