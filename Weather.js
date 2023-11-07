let key='1edcfcc8b6b841de3bbdddb4578e709b'
let city= document.getElementById('city');
let desc= document.getElementById('desc');
let ws= document.getElementById('ws');
let temp= document.getElementById('temp');
let hum= document.getElementById('hum');

function fetchData()
{
	let cityname= document.getElementById('cityname').value;
	let api= 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore';
	// let api= 'https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}';

	fetch(api)
	.then(response=>response.json())
	.then(data=>
	{
		city.innerHTML= data.name;
		desc.innerHTML= data.weather[0].description;

	})
}