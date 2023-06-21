//search song in API
function searchSong(){
const search = document.getElementById('search');
const button = document.getElementById('button');
const url = 'https://genius-song-lyrics1.p.rapidapi.com/search?q=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '194de15195msh3c00163b4c57383p18c30ajsn8cfd0b0b35ff',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

button.addEventListener('click', () => {
	const searchValue = search.value;
	fetch(`${url}${searchValue}`, options)
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
			}
)})


        .catch(err => { console.error(err); }
        );
    });}
export default searchSong;