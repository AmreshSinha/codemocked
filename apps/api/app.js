var express = require('express')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')

var indexRouter = require('./routes/index')
var codeRunRouter = require('./routes/codeRun')

var app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/api/code/run', codeRunRouter)

module.exports = app
