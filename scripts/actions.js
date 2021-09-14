'use strict';
const submitForm = () => {
let title = document.forms["addSongs"]["title"].value;
let artist = document.forms["addSongs"]["artist"].value;
let album = document.forms["addSongs"]["album"].value;
let CoverArt = document.forms["addSongs"]["CoverArt"].value;
let AudioSRC = document.forms["addSongs"]["AudioSRC"].value;
let duration = document.forms["addSongs"]["duration"].value;
addSong(title , artist , album , CoverArt , AudioSRC,duration);
createNewSongElement();
}