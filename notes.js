const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => "Your Notes..."

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote) {
        notes.indexOf(title)
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else{
        console.log('Note title taken!')
    }
}

const removeNote = (title) => {
    let notes = loadNotes()
    const keepNotes = notes.filter((note) => note.title !== title)

    if(keepNotes.length !== notes.length) {
        notes = keepNotes
        saveNotes(notes)
        console.log(chalk.bgGreen('Note deleted!'))
    } else{
        console.log(chalk.bgRed('No note with this title!'))
    }

    console.log('Removing a note!' + title)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch (e){
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(chalk.blue.bold(element.title))
        console.log(chalk.blue(element.body))
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
    console.log(chalk.blue.bold(note.title))
    console.log(chalk.blue(note.body))
    }
    else{
        console.log(chalk.bgRed('No note with this title!'))
    }
}

// Can set module exports to an object to 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}