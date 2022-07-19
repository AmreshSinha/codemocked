const { exec, spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

const outputPath = path.join(__dirname, '..', '/tmp/outputs')

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true })
}

const runCpp = (filepath, input) => {
  const jobId = path.basename(filepath).split('.')[0]
  const outPath = path.join(outputPath, `${jobId}.out`)

  return new Promise((resolve, reject) => {
    exec(
      `g++ ${filepath} -o ${outPath} && cd ${outPath}`,
      (err, stdout, stderr) => {
        if (err) {
          reject(err)
        }
        if (stderr) {
          reject(stderr)
        }

        const child = spawn(`${jobId}.out`)
        child.stdin.write(input)
        child.stdin.end()
        child.stdout.on('data', (data) => {
          console.log(`${jobId} stdout:\n${data}`)
          resolve(data)
        })
      }
    )
    // (error, stdout, stderr) => {
    //     error && reject({ error, stderr }),
    //     stderr && reject(stderr),
    //     resolve(stdout);
    // }
  })
}

module.exports = {
  runCpp,
}
