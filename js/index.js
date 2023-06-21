


//fetch api
const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=title&per_page=15&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '194de15195msh3c00163b4c57383p18c30ajsn8cfd0b0b35ff',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

async function fetchdata(){
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error("Error al consumir api",error);
    }
    
    }


// async function main(){
//     const apiData = await fetchdata();

//     apiData.forEach(element => {
//     const songTitle = element.hits;
//     console.log(songTitle);
// });
// };
// main();
//create funtion to get data search son from api and shaw in html
function getSong(){
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        
        const songTitle = data.hits;
        console.log(songTitle);
        songTitle.forEach(element => {
            const songTitle = element.result.full_title;
            const songArtis = element.result.artist_names;
            const backgroundImage = element.result.header_image_thumbnail_url;
            console.log(songTitle);
            const content = document.getElementById('TablesongTitle');
            const songArtisElement = document.createElement('label') ;
            const songTitleElement = document.createElement('p');
            songArtisElement.textContent = songArtis;
            songTitleElement.textContent = songTitle;
            const divElement = document.createElement('div');
            divElement.id = 'songArtis';
            divElement.title = 'songTitles';
            divElement.style.backgroundImage = `url(${backgroundImage})`;
            divElement.appendChild(songArtisElement);
            divElement.appendChild(songTitleElement);
            document.body.appendChild(content).appendChild(divElement);
        });
    });
}getSong();

//create function to get data search song from api and show in html
// function searchSong(){
    

// };


// links to html
document.getElementById('search').addEventListener('click', function(){
    window.location.href = 'search.html';
});
