const { filterByQuery } = require('../../../11.4/lib/animals');

const router =require('express').Router();


router.get('/notes',(req,res)=>{
    let results= animals;
    if(req.query){
        results=filterByQuery(req.query,results);
    }
    res.json(results);
});

