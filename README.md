# LIRI NODE APP

### Overview
LIRI (Language Interpretation and Recognition Interface) is a command line node
app that takes in parameters and gives back data. The app takes in user input
and returns detailed information on upcoming concerts, songs and movies.

The following commands will take user input and return detailed information on
upcoming concerts, songs and movies to the terminal:
1. `concert-this` searches the `Bands in Town Artist Events API and renders the below
     information about an event to the terminal
    * Venue Name
    * Venue City
    * Event Date
    * Screenshot:
    ![Screenshot](https://github.com/cmdavies10/liri-node-app/blob/master/screenshots/concert-this_screenshot.png)

2. `spotify-this-song` utilizes the `node-spotify-api` package to retrieve the
   following song information from the Spotify API:
   * Artist(s)
   * Song Name
   * Preview Link from Spotify
   * Album Name
   * Screenshot:
    ![screenshot](https://github.com/cmdavies10/liri-node-app/blob/master/screenshots/spotify-this-song_screenshot.png)

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
    * `Note:` LIRI will default to `Mr. Nobody` if user input is left blank
    * Screenshot:
    ![screenshot](https://github.com/cmdavies10/liri-node-app/blob/master/screenshots/movie-this_screenshot.png)

4. `do-what-it-says` reads text from inside the `random.txt` file and calls one of
   LIRI's commands
   ![screenshot](https://github.com/cmdavies10/liri-node-app/blob/master/screenshots/do-what-it-says_screenshot.png)

Additionally, LIRI will create a `log.txt` file and append the results from any
valid command.  Here is an example output from the log:

  ![screenshot](https://github.com/cmdavies10/liri-node-app/blob/master/screenshots/log-txt_screenshot.png)

### INSTRUCTIONS
In order to run LIRI, please ensure that Node is installed and create a local
`.env` file that includes the code below, replacing the values with your Spotify
API keys:
API details are stored within a local `.env`.

    ```js
    # Spotify API keys

    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret

    ```

In the terminal, users enter `node liri.js` followed by one of the following:
1. `concert-this <artist/band name>`
2. `spotify-this-song <song name>`
3. `movie-this <movie name>`
4. `do-what-says`

### TECHNOLOGIES USED
  * NodeJS
  * Packages: Axios, Node-Spotify-Api, Moment and FS
  * APIs: Bands in Town, Spotify and OMDB




