var express = require('express')
var router = express.Router()
var genFile = require('../utils/genFile')

/* POST code run. */
router.post('/', async function (req, res, next) {
  const { language = 'cpp', code } = req.body
  if (code === undefined) {
    return res
      .status(400)
      .json({ success: false, error: 'code body is missing or empty!' })
  }
  const filepath = await genFile(language, code)
  return res.json(req.body)
})

module.exports = router
