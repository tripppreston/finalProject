var express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();

var corsOptions = {
    origin: "http://localhost:8001"
  };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/www'));

require("./www/static/routes/harvested.routes")(app);

app.listen('8000');
console.log('working on 8000');

app.use("/js", express.static('./js/'));

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tucker58',
  database: 'harvestedObject'
})

// const app = express();
// app.use(...);

const db = require("./www/static/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

