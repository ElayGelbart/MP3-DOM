function createSongElement() {
    const songsdiv = document.getElementById("songs");
    for(let key of player.songs){
        getSongValuesFronId(key.id);
        songsdiv.appendChild(document.createElement("div")).innerHTML = `<img class="songIMG" src="${coverArt}"><p class="songPara"><span class="songTitle">${title}</span> <span class="songArtist">By ${artist}</span> <span class="songAlbum">From ${album}</span> <span class="songDuration">${durationToMMSS(duration)}</span></p><img class="playButton" onclick="playTheSong(${key.id})" src="./images/playButton.png">`;
    }
    const songdivs=songsdiv.getElementsByTagName("div");
    for(let key of songdivs){
        key.classList.add("eachSong");
    }
}
function createPlaylistElement() {
    const playlistdiv = document.getElementById("playlists");
    for(let key of player.playlists){
        getSongValuesFronId(key.songs[0]);
        playlistdiv.appendChild(document.createElement("div")).innerHTML = `<img class="songIMG" src="${coverArt}"><p class="songPara"><span class="playlistName">${key.name}</span> <span class="playlistSongCount">${getNumOfSongsInPlaylist(key.id)} Songs</span> <span class="playlistDuration">Total duration ${durationToMMSS(playlistDuration(key.id))}</span></p><img class="playButton" src="./images/playButton.png">`;
    }
    const playlistDiv=playlistdiv.getElementsByTagName("div");
    for(let key of playlistDiv){
        key.classList.add("eachSong");
    }
}
function playTheSong(songID){
    getSongValuesFronId(songID);
    document.getElementById("songDes").innerHTML=`Playing ${title} By ${artist} From The Album ${album}`;
    const audio = document.querySelector("audio");
    audio.setAttribute("src",player.songs[songArrIndex].AudioSRC);
}
createSongElement();
createPlaylistElement();

