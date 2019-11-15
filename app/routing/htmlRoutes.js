//Dependencies
let path = require('path');

//Export Routes
module.exports = function(app) {

//Default Route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

//Survey Route
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname,'../public/survey.html'));
});

}
