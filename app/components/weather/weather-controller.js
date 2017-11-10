function WeatherController() {

	var wc = this;
	var weatherService = new WeatherService();
	// var weather = []

	weatherService.getWeather(function (weather) {
		console.log('1')
		console.log(weather);
		//What can you do with this weather object?
		drawWeather(weather)
	})
	var weatherElem = document.getElementById('weather')

	function drawWeather(weather) {

		var template = ''
		template = `
		Temperature: ${Math.round(weather.main.temp * (9/5) - 459.67)}${String.fromCharCode(176)}
		Humidity: ${Math.round(weather.main.humidity)}%
		Day High: ${Math.round(weather.main.temp_max * (9/5) - 459.67)}${String.fromCharCode(176)}
		Day Low: ${Math.round(weather.main.temp_min * (9/5) - 459.67)}${String.fromCharCode(176)}
		Weather: ${weather.weather[0].main}
		`
		weatherElem.innerText = template
	}

}


