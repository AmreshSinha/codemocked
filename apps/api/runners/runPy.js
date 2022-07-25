const { spawn } = require('child_process')
// const fs = require('fs')
const path = require('path')

// const outputPath = path.join(__dirname, '..', '/tmp/outputs')

// if (!fs.existsSync(outputPath)) {
//   fs.mkdirSync(outputPath, { recursive: true })
// }

const runPy = (filepath, input) => {
  const jobId = path.basename(filepath).split('.')[0]
  // const outPath = path.join(outputPath, `${jobId}.out`)

  return new Promise((resolve, reject) => {
    const child = spawn(`python ${filepath}`)
    child.stdin.write(input)
    child.stdin.end()
    child.stdout.on('data', (data) => {
      console.log(`${jobId} stdout:\n${data}`)
      resolve(data)
    })
    child.stderr.on('data', (data) => {
      console.log(`${jobId} stderr:\n${data}`)
      reject(data)
    })
    child.on('close', (code) => {
      console.log(`${jobId} exited with code ${code}`)
    })
    // exec(`python ${filepath}`, (err, stdout, stderr) => {
    //   if (err) {
    //     reject(err)
    //   }
    //   if (stderr) {
    //     reject(stderr)
    //   }

    //   const child = spawn(`${jobId}.out`)
    //   child.stdin.write(input)
    //   child.stdin.end()
    //   child.stdout.on('data', (data) => {
    //     console.log(`${jobId} stdout:\n${data}`)
    //     resolve(data)
    //   })
    // })
  })
}

module.exports = {
  runPy,
}
