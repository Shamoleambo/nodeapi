export const notFound = (req, res, next) => {
  res.status(404).json({ message: 'Page not Found' })
  next()
}

const errorHandler = (err, req, res, next) => {
  res.json({ message: err.message })
}

export default errorHandler
