import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import connectToDB from './config/db.js'

dotenv.config()
const PORT = process.env.PORT || 5000

connectToDB()

const app = express()

app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`)
})
