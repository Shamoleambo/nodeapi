import express from 'express'
import {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
} from '../controller/userController.js'

const router = express.Router()

router.post('/', registerUser)
router.post('/login', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router
