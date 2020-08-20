// routes/home.js

let express = require('express');
let router = express.Router();

// health
router.get('/', function(req, res){
    res.send({health: 'goooooood'});
});

module.exports = router;