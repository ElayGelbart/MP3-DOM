function createSongElement() {
    const songsdiv = document.getElementById("songs");
    for(let key of player.songs){
        getSongValuesFronId(key.id);
        songsdiv.appendChild(document.createElement("div")).innerHTML = `<img class="songIMG" src="${coverArt}"><span class="songTitle">${title}</span> <span class="songArtist">By ${artist}</span> <span class="songAlbum">From ${album}</span> <span class="songDuration">${durationToMMSS(duration)}</span>`;
        console.log('pp');
    }
    const songdivs=songsdiv.getElementsByTagName("div");
    for(let key of songdivs){
        key.classList.add("eachSong");
    }
}
createSongElement();

