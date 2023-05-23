import jwt from 'jsonwebtoken'

const protect = (req, res, next) => {
  const token = req.cookies.jwtNodeApi
  const decoded = jwt.decode(token, process.env.JWT_SECRET)

  if (decoded) {
    req.userId = decoded.userId
    next()
  } else {
    res.status(401)
    throw new Error('Unauthorized, invalid token')
  }
}

export default protect
