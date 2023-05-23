import express from 'express'
import userRouter from './routes/userRoutes.js'

const app = express()

app.use('/api/users', userRouter)

app.listen(3000, () => {
  console.log(`Server up and running`)
})
