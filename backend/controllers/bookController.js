const bookList = require('../models/book')

// GET 列表（支持书名搜索）
exports.getBooks = (req, res) => {
  const { keyword } = req.query
  let list = [...bookList]
  if (keyword) {
    list = list.filter(item => item.title.includes(keyword))
  }
  res.json({ code: 200, data: list, msg: "ok" })
}

// GET 单本详情
exports.getBookById = (req, res) => {
  const id = Number(req.params.id)
  const book = bookList.find(b => b.id === id)
  if (!book) return res.status(404).json({ code: 404, msg: "图书不存在" })
  res.json({ code: 200, data: book })
}

// POST 新增
exports.addBook = (req, res) => {
  const newBook = {
    id: Date.now(),
    ...req.body
  }
  bookList.push(newBook)
  res.status(201).json({ code: 201, data: newBook, msg: "新增成功" })
}

// PUT 修改
exports.updateBook = (req, res) => {
  const id = Number(req.params.id)
  const idx = bookList.findIndex(b => b.id === id)
  if (idx === -1) return res.status(404).json({ code: 404, msg: "不存在" })
  bookList[idx] = { ...bookList[idx], ...req.body }
  res.json({ code: 200, data: bookList[idx], msg: "更新成功" })
}

// DELETE 删除
exports.delBook = (req, res) => {
  const id = Number(req.params.id)
  const idx = bookList.findIndex(b => b.id === id)
  if (idx === -1) return res.status(404).json({ code: 404, msg: "不存在" })
  bookList.splice(idx, 1)
  res.json({ code: 200, msg: "删除成功" })
}
