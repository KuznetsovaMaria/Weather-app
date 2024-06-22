const url1Part = 'http://api.weatherapi.com/v1/current.json?key=1264af36d4f441d0b7e114002242006&q=';
const url2Part = '&aqi=no'

export async function getWeather(location) {
    let url = url1Part + location + url2Part;
    const response = await fetch(url);
    const weatherData = await response.json();
    let weatherObj = {
        location: weatherData.location.name,
        temperatureC: weatherData.current.temp_c + '°C',
        description: weatherData.current.condition.text,
    }
    return weatherObj;
}