import asyncHandler from 'express-async-handler'
import User from '../model/User.js'

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Name, E-mail and Password must not be empty')
  }
  if (
    name.trim().length === 0 ||
    email.trim().length === 0 ||
    password.trim().length === 0
  ) {
    res.status(400)
    throw new Error('Name, E-mail and Password must not be empty')
  }

  const user = new User()

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

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
