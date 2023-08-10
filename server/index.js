const express = require('express')
const routes = require('@util/routes')
const { errorHandler, tokenExtractor, unknownEndpoint } = require('@middleware/index')

const app = express()

app.use(express.json())

app.use(tokenExtractor)

app.use(routes)

app.use(unknownEndpoint)

app.use(errorHandler)

module.exports = app
