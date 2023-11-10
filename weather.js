const apiKey = "b1cbc8fd1e0bc2f78983176342770cd1"
const url = `https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&units=metric&appid=${apiKey}`

console.log("Weather Forecast: Jakarta")

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		const forecast = data.list.filter((item, index) => index % 8 === 0)
		forecast.slice(0, 5).forEach((item) => {
			const date = new Date(item.dt * 1000)
			const temperature = item.main.temp
			console.log(`Date: ${date.toDateString()}, Temperature: ${temperature}°C`)
		})
	})
	.catch((error) => console.error("Error:", error))
