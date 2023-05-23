import express from 'express'

const app = express()

app.use('/', (req, res, next) => {
  res.send('<h1>Hello my man!</h1>')
})

app.listen(3000, () => {
  console.log(`Server up and running`)
})
