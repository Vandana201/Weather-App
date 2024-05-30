const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '800bb29ce7mshafbf033e5549ed4p119bb3jsnc40c54f82f87',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let form = document.querySelector("#main-form")
let temp = document.querySelector(".temp span")
let formCity = document.querySelector("#city")
let cityName = document.querySelector(".city")
let humidity = document.querySelector(".humidity h4")
let windspeed = document.querySelector(".wind h4")
let maxtemp = document.querySelector(".maxtemp h4")
let mintemp = document.querySelector(".mintemp h4")
console.log(mintemp)
let weatherData;
let apiCall = async function (city) {
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
	let data = await fetch(url, options);
	let fullData = data.json();
	fullData.then((data) => {
		weatherData = data;
		console.log(weatherData)
		temp.innerText = weatherData.temp
		humidity.innerText = weatherData.humidity
		windspeed.innerText = weatherData.wind_speed
		maxtemp.innerText = weatherData.max_temp
		mintemp.innerText= weatherData.min_temp
	})
}
form.addEventListener("submit", (e) => {
	e.preventDefault()
	cityName.innerText = formCity.value;
	let city = formCity.value
	apiCall(city)
})




// background-image: url("assets/image/moon.png");
// background-repeat: no-repeat;
// background-size: cover;
// height: 500px;
// width: 300px;