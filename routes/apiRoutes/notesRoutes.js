const router =require('express').Router();

const {notes} = require('../../db/db.json');

const {
    noteCreateNewNote,
    noteDeleteNote
} =require('../../lib/noteFunctions');

//save note history to json db 
router.get('./notes',(req,res)=>{
    let saved =notes;
    res.json(saved);
})


router.post('/notes',(req,res)=>{
    req.body.id = notes.toString();
    let notes =noteCreateNewNote(req.body.notes);
    res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
   noteDeleteNote(notes, req.params.id);
   res.json(notes);
});

module.exports =router;