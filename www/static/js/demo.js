// get the client
// var express= require('express');
// var app=express();



// const mysql = require('mysql');
// class db {

//   constructor(){
//     this.connection = mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       database: 'harvestedObject',
//       password: 'tucker58'
//     });
//   }
// create the connection to database
 

// getAllObjects(){
//   this.connection.query(
//     'SELECT * FROM `Harvested`',
//     function(err, results) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
// }

// selectById(id){
//   this.connection.query(
//   'SELECT * FROM `Harvested` WHERE `harvestedID` = ?', [id],
//     function(err, results) {
//     console.log(results);
//   }
// );

// }
// }

// function fillTable() {
//   var db = new db(); //Creates a new db(database) object for this function.
//   var harvestedList = db.getAllObjects(); //Calling the function to get all objects
//   var table = document.getElementById("harvestedTable");
//   for(var i = 0; i< harvestedList.length; i++ ){
//     var row = table.insertRow(i);
//     for(var j = 0; j< harvestedList[i].length; j++ ) {
//       var cell = row.insertCell(j);
//       cell.innerHTML = harvestedList[i][j]; //
  
//     }
//   }
  
 
// }

function buttonFunction(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if(email.includes("@"))
    {
        document.getElementById("display-name").innerHTML = "";
    document.getElementById("display-name").innerHTML = "Thank you " + name + " for signing up!";
    document.form1.text1.focus();
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
   
    
}
}


