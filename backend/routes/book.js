const express = require('express')
const router = express.Router()
const ctl = require('../controllers/bookController')

router.get('/', ctl.getBooks)
router.get('/:id', ctl.getBookById)
router.post('/', ctl.addBook)
router.put('/:id', ctl.updateBook)
router.delete('/:id', ctl.delBook)

module.exports = router
