const baseURL = 'http://www.songsterr.com/a/ra/songs.json';
// const key = 
let url;

//Search Form
const searchTermSong = document.querySelector('.searchSong');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//Results Nav
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.back');
const nav = document.querySelector('nav');

//Results Section
const section = document.querySelector('section');
const div = document.querySelector('.songName')

//Event Listeners
searchForm.addEventListener('submit', fetchSongResults);

//FULL Assembled URL
function fetchSongResults(e) {
    e.preventDefault();
    console.log(e);

    url = baseURL + '?pattern=' + searchTermSong.value;
    console.log(url)

fetch(url)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        displayResults(json);
    })
}

function displayResults(json) {
        while (section.firstChild) {
            section.removeChild(section.firstChild);
        }
     console.log("DisplayResults", json);

        let songList = json.forEach(s => {
            console.log(s);
  
        let artists = s.artist.name;
            console.log(artists);

        let songId = s.id
            console.log (songId)

        let songLink = 'http://www.songsterr.com/a/wa/song?id=' + songId
            console.log(songLink);

        let title = document.createElement('h2');
        let artist = document.createElement('p');
        let clearfix = document.createElement('div');
        let link = document.createElement('a');
        let img = document.createElement('img');
        link.href = songLink
        img.setAttribute('href', songLink);
        img.src = "https://image.flaticon.com/icons/svg/527/527123.svg";

        title.innerText = s.title
        artist.innerText = ' by   ' + s.artist.name

        clearfix.setAttribute('class', 'clearfix');
        
        section.appendChild(clearfix);
        clearfix.appendChild(title);
        title.appendChild(artist);
        title.appendChild(link);
        link.appendChild(img);
        })
    }
