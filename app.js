const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    descride: 'Add a new note',
    builder: {
        title: {
            describe:'Note Title',
            demandOption:true,
            type: 'string'
        },
        body: {
            describe: 'Body of Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.addNote(argv.title,argv.body)
    }
})
//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Title to Remove",
            demandOption:true,
            type: 'string'
        }
    },
    handler (argv){ 
        notes.removeNotes(argv.title)
    }
})
//list the notes command

yargs.command({
    command:'list',
    describe:'List notes',
    handler (){
        notes.listNotes()
    }
})

//reading notes command 
yargs.command({
    command:'read',
    describe: 'Read notes',
    builder:{
        title: {
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
