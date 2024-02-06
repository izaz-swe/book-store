const bookModel = require("../models/Book");

const createBook = async (req, res) => {
  try {
    const {title, author, publishYear} = req.body;
    if (!title || !author || !publishYear){
      res.status(400).send({message: "Send all Required Field please."});
    }
    const bookDetails = {
      title,
      author,
      publishYear
    };
    const book = await bookModel.createBook(bookDetails);
    res.status(201).json({status: 201, book, message: "Book Created."});
  } catch (error) {
    console.log(error.message);
    res.status(res).send({message: error.message});
  }
};
const getBooks = async (req, res) => {
  try {
    const books = await bookModel.getBooks();
    res.status(200).json({count: books.length, data: books});
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};
const updateBookById = async (req, res) => {
  try {
    const {id} = req.params;
    const {title, author, publishYear} = req.body;
    const bookDetails = {};
    if(title) bookDetails.title = title;
    if (author) bookDetails.author = author;
    if(publishYear) bookDetails.publishYear = publishYear;
    const updatedBook = await bookModel.updateBook(id, bookDetails);
    if(updatedBook){
      res.status(201).json({data: updatedBook, message: "Book Updated."});
    }else {
      res.status(500).send({message: "Book Not Found"});
    }
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.getBookById(id);
    book ? res.status(200).json({status: 200, book, message: "Book details Fetched."}) : res.status(500).send({message: "Book not Found."});
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};
const deleteBook = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await bookModel.deleteBook(id);
    result ? res.status(200).send({message: "Book Deleted."}): res.status(500).send({message: "Book not Found"});
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};
module.exports = {
  createBook,
  getBooks,
  updateBookById,
  deleteBook,
  getBookById
}