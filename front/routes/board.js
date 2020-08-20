// routes/home.js

let express = require('express');
let router = express.Router();
let controller = require('../controller/controller')

// Home
router.get('/board', function(req, res){
    
    controller.list(function(boardList){
        res.render('index',
            {
                board: boardList
            }
        );
    });
});

router.post('/add', function(req, res){
    console.log(req.body)
    let form = {
        title: req.body.title,
        content: req.body.content
    }
    
    controller.add(form, function(res){
        console.log("res: ", res);
    })
    
    res.redirect('/board');
});

module.exports = router;
