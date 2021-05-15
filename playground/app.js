//const fs = require('fs')
//fs.writeFileSync('notes.txt', 'This file was created by Node.js')
//fs.appendFileSync('notes.txt', '\n Second Line appended')
// Self-made modules 
const notes = require('../notes')
const add = require('../utils')
//npm modules
const validate = require('validator')
const chalk = require('chalk')
const name = 'Sam'
const success = 'Success'
let note = notes.getNotes
let sum = add(4, -2)
console.log(sum)
console.log(note)
console.log(validate.isURL('w'))
console.log(chalk.bgGreen.white.bold(success))

command = console.log(process.argv[2])
if(command === 'add') {
    console.log('Adding note!')
}
else{
    console.log('Nope!')
}

//console.log(yargs.argv)

// Experimenting with ES6 method definition and arrow function declarations
const event = {
    name : 'Birthday Party',
    guestList: ['Andrew', 'Glenn', 'Mike'],
    printGuestList () {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()