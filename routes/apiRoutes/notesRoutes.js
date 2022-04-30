const router =require('express').Router();

//set up the api get routes
router.get('/notes',(req,res)=>{
   res.json(notes);
});

//set up the api post routes
router.post('/notes',(req,res)=>{
    res.json(notes);
});

//retrieves a note with specific id 
