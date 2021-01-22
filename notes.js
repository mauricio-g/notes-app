const chalk = require('chalk')
const fs = require('fs')
const process = require('process')

const addNote = (title,body) => {
    const notes = loadNotes()

    // const duplicateNotes  = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)


    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added'))
    }else {
        console.log(chalk.red.inverse('Note Title Taken'))
    
    }
        
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJsON)

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)   
    }catch (e){
        return []
    }
}

const removeNotes = (title) => {
    notes = loadNotes()
    const newNotes  = notes.filter((note) => note.title !== title)
    
    
    if (notes.length === newNotes.length){
    console.log(chalk.red.inverse('No Note Found'))
    }else 
    console.log(chalk.green.inverse('Note Removed'))
    saveNotes(newNotes)
}

const listNotes = () => {
    notes = loadNotes()
    console.log(chalk.green('Your Notes'))
    notes.forEach((note) => console.log(chalk.green(note.title)));
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
  
  if (note){
      console.log(chalk.inverse(note.title))
      console.log(chalk.inverse(note.body))
  }else {
      console.log(chalk.red.inverse('Note not Found to read'))
  }
    
}

module.exports = {
    addNote: addNote,  
    removeNotes: removeNotes, 
    listNotes: listNotes,
    readNote: readNote
}
