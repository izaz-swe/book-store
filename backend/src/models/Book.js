const Book = require("../schema/bookSchema");

const createBook = async (bookDetails) => {
  const book = new Book(bookDetails);
  const createdBook = await book.save();
  return createdBook;
};
const getBooks = async () => {
  const books = await Book.find();
  return books;
};
const updateBook = async (id, bookDetails) => {
  const updatedBook = await Book.findByIdAndUpdate(id, bookDetails, {new: true});
  return updatedBook;
};
const deleteBook = async (id) => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};
const getBookById =  async (id) => {
  const book = await Book.findById(id);
  return book;
};
module.exports = {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
  getBookById
}