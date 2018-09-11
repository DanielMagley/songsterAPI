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
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

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
                                                    // let songTitle = s.title;
                                                    //     console.log(songTitle);
        let artists = s.artist.name;
            console.log(artists);

        let songId = s.id
            console.log (songId)

        let songLink = 'http://www.songsterr.com/a/wa/song?id=' + songId
            console.log(songLink);

                                                    // if(s.length === 10) {
                                                    //     nav.style.display = 'block';
                                                    // } else if (s.length < 10) {
                                                    //     nextBtn.style.visibility = 'hidden';
                                                    // } else {
                                                    //     return;
                                                    // }
    
        let title = document.createElement('h2');
        let artist = document.createElement('h3');
        let clearfix = document.createElement('div');
        let link = document.createElement('a');
        link.href = songLink
        img.innerHTML =
        
        title.innerText = s.title
        artist.innerText = s.artist.name
                                                    // let img = document.createElement('img');
        
                                                    // let clearfix = document.createElement('div');

                                                    // let current = songList[i];
                                                    // console.log("current: ", current);
                
        section.appendChild(clearfix);
        section.appendChild(title);
        section.appendChild(artist);
        section.appendChild(link);
        section.appendChild(clearfix);
                    // article.appendChild(img);
                    // article.appendChild(artist);
                    // article.appendChild(clearfix);
                    // section.appendChild(song);
                
            
        })
    }








function nextPage() {
    pageNumber++;
    fetchResults()
    // console.log("clicked")
    // console.log("Page Number:", pageNumber);
}

function previousPage() {
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    // console.log("Page:", pageNumber)
// console.log('clicked clicked')
}