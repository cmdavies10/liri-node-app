// code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// initialize variables
var fs = require("fs"); // to read .txt file
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");

// user command and inputs
var userCommand = process.argv[2];
var userInput = process.argv.slice(3).join("+");

// Execute Function
liriBot(userCommand, userInput);

// FUNCTIONS====
function liriBot(userCommand, userInput) {
    switch (userCommand) {
        case "concert-this":
            concertThis(userInput);
            break;
        case "movie-this":
            movieThis(userInput);
            break;
        case "spotify-this-song":
            spotifyThis(userInput);
            break;
        case "do-what-it-says":
            doThis(userInput);
            break;
        default:
            console.log("Invalid. Please type one of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
    };
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

function spotifyThis(userInput) {
    if (!userInput) {
        userInput = "The Sign"
    }

    spotify.search({
        type: "track",
        query: userInput
    }, function(err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }

        var songs = data.tracks.items;

        for (var i = 0; i < songs.length; i++) {
            console.log("===")
            console.log("Artist(s): " + songs[i].artists[0].name);
            console.log("Song Name: " + songs[i].name);
            console.log("Song Preview: " + songs[i].preview_url);
            console.log("Album: " + songs[i].album.name);
        }
    })
}

function movieThis(userInput) {
    if (!userInput) {
        userInput = "Mr. Nobody";
    }
    var queryURL = "http://www.omdbapi.com/?t=" + userInput + "&apikey=trilogy"
    console.log(queryURL);

    axios.get(queryURL).then(function(response) {
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
};

function doThis(userInput) {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        }

        var dataArr = data.split(",");
        console.log(dataArr);

        userCommand = dataArr[0];
        console.log(userCommand);

        userInput = dataArr[1];
        console.log(userInput);

        liriBot(userCommand, userInput);
    });
}