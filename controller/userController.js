import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
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

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = new User()
  user.name = name
  user.email = email
  user.password = password
  await user.save()

  res.status(201).json({ _id: user._id, name: user.name, email: user.email })
})

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) {
    res.status(400)
    throw new Error('Invalid User or Password')
  }

  const passwordsMatch = await user.checkPasswords(password)
  if (passwordsMatch) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d'
    })
    res.cookie('jwtNodeApi', token, {
      httpOnly: true,
      maxAge: 30 * 24 * 3600 * 1000
    })
    res.status(200).json({ _id: user._id, name: user.name, email: user.email })
  } else {
    res.status(400)
    throw new Error('Invalid User or Password')
  }
})

export const logoutUser = (req, res) => {
  res.clearCookie('jwtNodeApi')
  res.status(200).json({ message: 'Logged out' })
}

export const getUserProfile = asyncHandler(async (req, res) => {
  const userId = req.userId
  const user = await User.findById(userId).select('-password')
  res.status(200).json(user)
})

export const updateUserProfile = (req, res) => {
  res.status(200).json({ message: 'Update User Profile' })
}
