const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  }
  next()
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message, error.name, error.extra)

  if (error.name === 'ApplicationError') return response.status(error.status).send({ error: error.message })
  if (error.name === 'CastError') return response.status(error.status).send({ error: 'malformatted id' })
  if (error.name === 'ValidationError') return response.status(error.status).json({ error: error.message })
  if (error.name === 'JsonWebTokenError') return response.status(error.status).json({ error: 'invalid token' })

  response.status(500).send({ error: error.message })

  next(error)
}

module.exports = {
  unknownEndpoint,
  tokenExtractor,
  errorHandler,
}
