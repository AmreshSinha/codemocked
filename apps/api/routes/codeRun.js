var express = require('express')
var router = express.Router()
var genFile = require('../utils/genFile')
const { PrismaClient } = require('@prisma/client')
const addCodeToQueue = require('../utils/queue.js')

const prisma = new PrismaClient()

/* POST code run. */
// router.post('/', async function (req, res, next) {})
router.post('/', async function (req, res) {
  const { language = 'cpp', code, input } = req.body

  if (code === undefined) {
    return res
      .status(400)
      .json({ success: false, error: 'code body is missing or empty!' })
  }

  const filepath = await genFile(language, code)

  const job = await prisma.CodeJob.create({
    data: {
      language,
      filepath,
      input,
      status: 'pending',
    },
  })

  const jobId = job('id')
  addCodeToQueue(jobId)

  res.status(201).json({ jobId })
})

router.get('/status', async function (req, res) {
  const jobId = req.query.id

  if (jobId === undefined) {
    return res
      .status(400)
      .json({
        success: false,
        status: 400,
        message: 'job id is either missing or invalid!',
      })
  }

  const job = await prisma.CodeJob.findOne({
    where: {
      id: jobId,
    },
  })

  if (job === undefined) {
    return res
      .status(400)
      .json({
        success: false,
        status: 400,
        message: 'no job found with the provided id',
      })
  }

  return res.status(200).json({
    success: true,
    job,
  })
})

module.exports = router
