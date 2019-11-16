//Dependecies
let express = require('express');
let path = require('path');
let friends = require('./app/data/friends.js');

//Set Up Express
let app = express();
let PORT = process.env.PORT || 3000;

//Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Files
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

//Start Server
app.listen(PORT, function() {
    console.log('Listening on PORT: ' + PORT);
});