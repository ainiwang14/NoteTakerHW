//list variables, require dependencies

// set up express

var express = require("express");

var app = express();
var PORT = process.env.PORT || 3040;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// make IDs for notes

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});