const fs = require('fs')
// const book = {
//     title: "Cracking the coding interview",
//     author: "Gayle McDowell"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('json_example.json', bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

const dataBuffer = fs.readFileSync('json_example.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
data.title = "New Title"
data.author = "New Author"
bookJSON = JSON.stringify(data)
fs.writeFileSync('json_example.json', bookJSON)