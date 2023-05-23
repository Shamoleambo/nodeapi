import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRouter from './routes/userRoutes.js'
import connectToDB from './config/db.js'
import errorHandler, {
  notFound
} from './middlewares/errorHandlingMiddlewares.js'

dotenv.config()
const PORT = process.env.PORT || 5000

connectToDB()

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.use('/api/users', userRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`)
})
