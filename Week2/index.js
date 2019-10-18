const mysql = require("mysql");
const express = require("express");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world"
});

connection.connect(function(err) {
  if (err) {
    console.log("Error!");
  } else {
    console.log("Connected!");
  }
});
app.get("/1", function(req, res) {
  connection.query(
    "select * from 'country' where 'capital'= ?",
    ["1109"],
    function(err, rows, fields) {
      if (err) throw err;

      console.log("The solution is: ", rows[0].country);
    }
  );

  connection.end();
});

app.listen(1337);
