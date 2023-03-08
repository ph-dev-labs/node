// globals - NO WINDOW !!!!!

// __dirname - path to current directory
// __filename - file name
//require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info abour env where the program is being excuted

console.log(process)


// modules
const names = require("./names")
const sayHi = require("./utils")
const genericDate = require('./alternative')
console.log(genericDate)
sayHi(names.john)
sayHi(names.peter)