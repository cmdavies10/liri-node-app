// code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// initialize variables
var fs = require("fs"); // to read .txt file
var spotifyAPI = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");


// code required to import the keys.js file
var keys = require("./keys.js");

// use the below to access keys information
// var spotify = new Spotify(keys.spotify);

// user command and inputs
var userCommand = process.argv[2];
var userInput = process.argv.slice(3).join("+");

concertThis();


// FUNCTIONS====
// switch function

function concertThis() {
    var queryURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"
    console.log(queryURL);

    axios.get(queryURL).then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
            console.log("Venue Name: " + response.data[i].venue.name);
            console.log("Venue Location: " + response.data[i].venue.city); // add state or country
            console.log("Concert Date: " + response.data[i].datetime);
        }
    }).catch(function(error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers)
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
};



// node liri.js concert-this <artist/band name here>

// This will search the Bands in Town Artist Events API
// ("https://rest.bandsintown.com/artists/" + artist +
// "/events?app_id=codingbootcamp") for an artist and render the following
// information about each event to the terminal:

// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited address
// var address = process.argv.slice(2).join(" ");

// Name of the venue

// Venue location

// Date of the Event (use moment to format this as "MM/DD/YYYY")

// Important: There is no need to sign up for a Bands in Town api_id key. Use the codingbootcamp as your app_id. For example, the URL used to search for "Celine Dion" would look like the following:

// https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp