var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Welcome to the Codemocked API!',
  })
})

module.exports = router
