let express = require('express');
let router = express.Router();
let mysql = require('mysql');
require('dotenv').config()

let dbconfig = {
    host: process.env.DB_HOST,
    user: 'yang',
    password: 'didwogh123',
    port: '3306', 
    database: 'docker',
    connectionLimit: 50
}

let connection = mysql.createConnection(dbconfig);

// Home
router.get('/', function(req, res){
    console.log("api1");
    let query = 'select * from board';
    connection.query(query, (err, rows) => {
        console.log(rows)
        res.send(rows);
    })

});

router.post('/add', function(req, res){
    console.log("api2");
    let query = `
            INSERT INTO board(title, content, \`date\`) 
            VALUES(
                '${req.body.title}',
                '${req.body.content}',
                now()
    )`;
    console.log(query);
    connection.query(query, (err, rows) => {
        res.send(rows);
    })
});

module.exports = router;
