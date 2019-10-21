# liri-node-app

### Overview
LIRI ('Language Interpretation and Recognition Interface) is a command line node
app that takes in parameters and gives back data. The app takes in user input
and returns detailed information on upcoming concerts, songs and movies.

The following commands will take user input and return detailed information on
upcoming concerts, songs and movies to the terminal:
1. `concert-this` searches the `Bands in Town Artist Events API and renders the below
     information about an event to the terminal
    * Venue Name
    * Venue City
    * Event Date
2. `spotify-this-song` utilizes the `node-spotify-api` package to retrieve the
   following song information from the Spotify API:
   * Artist(s)
   * Song Name
   * Preview Link from Spotify
   * Album Name
3. `movie-this` uses the OMDB API to output the following information on a given
  movie to the terminal:
    * Movie Title
    * Release Year
    * IMDB Rating
    * Rotten Tomatoes Rating
    * Country of Production
    * Language(s)
    * Plot
    * Actor(s) Name(s)
4. `do-what-it-says` reads text from inside the `random.txt` file and calls one of
   LIRI's commands

### Instructions
In the terminal, users enter `node liri.js` followed by one of the following:
1. `concert-this <artist/band name>`
2. `spotify-this-song <song name>`
3. `movie-this <movie name>`
4. `do-what-says`


