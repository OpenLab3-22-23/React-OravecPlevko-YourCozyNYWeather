const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f1be186ce2574d62a4b72895d19004f5',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));