import express from 'express'

const router = express.Router()

router.post('/', register)
router.post('/login', login)
router.post('/logout', logout)
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router
