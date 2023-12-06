const { Author, Book } = require("../model/model");

const authorController = {
  //add author
  addAuthor: async (res, req) => {
    res.status(200).json(req.body);
  },
};

module.exports = authorController;
