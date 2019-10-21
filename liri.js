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


// concertThis();


// FUNCTIONS====
// switch function
switch (userCommand) {
    case "concert-this":
        concertThis(userInput);
        break;
    case "movie-this":
        movieThis(userInput);
        break;
    default:
        console.log("Invalid. Please type one of the following options: \nconcert-this \nmovie-this")
}

function concertThis(userInput) {
    var queryURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"
    console.log(queryURL);

    axios.get(queryURL).then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
            console.log("===")
            console.log("Venue Name: " + response.data[i].venue.name);
            console.log("Venue Location: " + response.data[i].venue.city); // add state or country
            console.log("Concert Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
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

function movieThis(userInput) {
    var queryURL = "http://www.omdbapi.com/?t=" + userInput + "&apikey=trilogy"
    console.log(queryURL);

    axios.get(queryURL).then(function(response) {
        if (!userInput) {
            userInput = "Mr. Nobody"
        }
        console.log("===")
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country(ies): " + response.data.Country);
        console.log("Language(s): " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actor(s): " + response.data.Actors);
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
}