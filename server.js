//Dependencies
const express = require("express");

//Server
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes =require('./routes/apiRoutes');
const htmlRoutes =require('./routes/htmlRoutes');


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static middleware
app.use(express.static('public'));

//Use apiRoutes
app.use('/api',apiRoutes);
app.use('/',htmlRoutes);


app.listen(PORT,() => {
    console.log(`App listening on PORT ${PORT}.`);
});  



