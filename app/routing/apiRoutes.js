//Dependecy
let data = require('../data/friends.js');

//Export API Routes
module.exports = function(app) {

    //GET Request
    app.get('/api/friends', function(req, res) {
        res.json(data);
    });

    //POST Request
    app.post('/api/friends', function(req, res) {
        data.push(req.body);
    });
}