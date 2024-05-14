import express from 'express'
import controller from '../controller/ctr.js'

const router=express.Router();

router.get('/', controller.getServerPage)

router.get('/get-book', controller.getBook)
router.get('/get-book-by/:id', controller.getSingleBook)
router.post('/add-book', controller.addBook)
router.put('/edit-book/:id', controller.updateBook)
router.delete('/delete-book/:id', controller.deleteBook)

export default router

