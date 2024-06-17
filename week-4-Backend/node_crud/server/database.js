const mysql = require('mysql');
const dotenv = require('dotenv');

let instance = null;

dotenv.config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

connection.connect( function(err){
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + connection.state);
});