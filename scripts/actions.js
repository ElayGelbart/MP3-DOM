'use strict';
const submitForm = () => {
    let title = document.forms["addSongs"]["title"].value;
    let artist = document.forms["addSongs"]["artist"].value;
    let album = document.forms["addSongs"]["album"].value;
    let CoverArt = document.forms["addSongs"]["CoverArt"].value;
    let AudioSRC = document.forms["addSongs"]["AudioSRC"].value;
    let duration = document.forms["addSongs"]["duration"].value;
    addSong(title, artist, album, CoverArt, AudioSRC, duration);
    deleteSongsFromPage();
    createSongElement();
}
const removeSong = (id) => {
    getSongValuesFronId(id);
    player.songs.splice(songArrIndex, 1);
    for (let key of player.playlists) {
        let indexInList = key.songs.indexOf(id);
        if (indexInList >= 0) {
            key.songs.splice(indexInList, 1);
        }
    }
    deleteSongsNPlaylistsFromPage();
    createSongElement();
    createPlaylistElement()
}