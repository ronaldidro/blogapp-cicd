const express = require('express')
const mongoose = require('mongoose')
const routes = require('@util/routes')
const { errorHandler, tokenExtractor, unknownEndpoint } = require('@middleware/index')
const { MONGODB_URI } = require('@util/common')

const app = express()

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connection to MongoDB:', error.message)
  })

app.use(express.json())

app.use(tokenExtractor)

app.use(routes)

app.use(unknownEndpoint)

app.use(errorHandler)

module.exports = app
