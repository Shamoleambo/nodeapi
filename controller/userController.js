export const registerUser = (req, res) => {
  res.status(200).json({ message: 'Register User' })
}

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
