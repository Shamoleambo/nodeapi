import express from 'express'
import {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
} from '../controller/userController.js'
import protect from '../middlewares/protectRoute.js'

const router = express.Router()

router.post('/', registerUser)
router.post('/login', authUser)
router.post('/logout', protect, logoutUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
