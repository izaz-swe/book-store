const {Router} = require('express');
const { createBook, getBooks, updateBookById, deleteBook, getBookById } = require('../controllers/book.controller');
const router = Router();
router.post('/create', createBook);
router.get('/book-list', getBooks);
router.get('/book-list/details/:id',getBookById)
router.put('/book-list/:id', updateBookById);
router.delete('/delete/:id', deleteBook);
module.exports = router;