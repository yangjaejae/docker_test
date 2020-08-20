let request = require('request');
require('dotenv').config()

function get(cb){

    request({
                url: `http://${process.env.API_URL}:${process.env.API_PORT}/board`,
                method: "GET"
            }
    , (err, res, body) => {
        let boardList = JSON.parse(body);
        cb(boardList);
    });

}

function post(form, cb){
    console.log(form)
    request({
                url: `http://${process.env.API_URL}:${process.env.API_PORT}/board/add`,
                method: "POST",
                form: {
                    title: form.title,
                    content: form.content
                }
            }
    , (err, res, body) => {
        cb(err, body)
    });
    
}

module.exports = {
    get, 
    post
}
