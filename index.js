#!javascript
var mysql = require('mysql');
var express = require('express'),
    app = express();


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    plugin: auth_socket
    });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
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