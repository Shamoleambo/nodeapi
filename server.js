import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import connectToDB from './config/db.js'
import errorHandler, { notFound } from './utils/errorHandling.js'

dotenv.config()
const PORT = process.env.PORT || 5000

connectToDB()

const app = express()

app.use('/api/users', userRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`)
})
