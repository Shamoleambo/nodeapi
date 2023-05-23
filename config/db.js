import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler'

const connectToDB = asyncHandler(async (req, res) => {
  const conn = await mongoose.connect(process.env.MONGO_URI)

  if (conn) {
    console.log(`Connected to the databse: ${conn.connection.host}`)
  } else {
    res.status(400)
    throw new Error('Connection failed')
  }
})

export default connectToDB
