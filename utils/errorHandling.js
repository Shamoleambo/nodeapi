export const notFound = (req, res, next) => {
  res.status(404).json({ message: 'Page not Found' })
  next()
}

const errorHandler = (err, req, res, next) => {
  res.status(500).json({ message: 'error' })
}

export default errorHandler
