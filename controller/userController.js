import asyncHandler from 'express-async-handler'
import User from '../model/User.js'

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const user = new User()

  user.name = name
  user.email = email
  user.password = password

  await user.save()
  res.status(200).json({ user })
})

export const authUser = (req, res) => {
  res.status(200).json({ message: 'Authenticate User' })
}

export const logoutUser = (req, res) => {
  res.status(200).json({ message: 'Logout User' })
}

export const getUserProfile = (req, res) => {
  res.status(200).json({ message: 'Get User Profile' })
}

export const updateUserProfile = (req, res) => {
  res.status(200).json({ message: 'Update User Profile' })
}
