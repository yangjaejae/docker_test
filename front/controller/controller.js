let requestService = require('../service/request');

function list(cb){

    requestService.get(function(boardList){
        cb(boardList);
    });
}

function add(form, cb){
    requestService.post(form, function(err, res){
        if(!err){
            cb(res);
        }else{
            cb(err);
        }
    });
}

module.exports = {
    list,
    add
}