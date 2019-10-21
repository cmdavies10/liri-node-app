// code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// code required to import the keys.js file
var keys = require("./keys.js");

// use the below to access keys information
var spotify = new Spotify(keys.spotify);