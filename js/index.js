//fetch api
const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=q&per_page=10&page=1';
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
fetchdata();