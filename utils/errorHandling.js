export const notFound = (req, res, next) => {
  res.status(404).json({ message: 'Page not Found' })
  next()
}

const errorHandler = (err, req, res, next) => {
  res.status(400).json({ message: err.message })
}

export default errorHandler
