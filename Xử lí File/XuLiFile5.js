const fs = require('fs')

const dir = 'Xử lí File'
const files = fs.readdirSync(dir)

for (const file of files) {
  console.log(file)
}
