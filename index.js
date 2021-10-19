#!javascript
var mysql = require('mysql');
var express = require('express'),
    app = express();


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "friendly_feud"
    });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //var sql = "INSERT INTO questions (question_text, answer_id) VALUES('this is a test of the questions thing', 1)";
    /*con.query(sql, function(err, result){
        if(err) throw err;
        console.log("SQL Executed");
    })
    */
    });

app.use(express.static(__dirname + '/public'));
app.listen(8080);


//Third way
//everyone gets a buzzer
//whoever buzzes in first gets to answer
//if they get top answer play/pass
//otherwise the other team has a chance to steal (?)
//play/pass after 

//pros 
//everyone gets to participate
//less time sitting around doing nothing
//no guarantee you'll get the answer right if the first team 
//gets all their strikes

//cons
//close to original show

//MySQL for DB 
//Express.js
//React.js
//Node.js  --Install manually 

//Codecademy.org
//Frecodecamp.org