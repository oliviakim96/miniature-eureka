const express = require("express");
const routes = require("./Develop/routes/routes");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Use apiRoutes
app.use('/api',routes);


app.listen(PORT,() => {
    console.log(`App listening on PORT ${PORT}.`);
});  



