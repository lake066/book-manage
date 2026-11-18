const express = require('express')
const corsConfig = require('./middleware/corsConfig')
const bookRouter = require('./routes/book')
const app = express()
const port = process.env.PORT || 3000

app.use(corsConfig)
app.use(express.json())
app.use('/api/books', bookRouter)

app.use((req, res) => {
  res.status(404).json({ code: 404, msg: '接口不存在' })
})

app.listen(port, () => {
  console.log(`后端启动，端口：${port}`)
})
