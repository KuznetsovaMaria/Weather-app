import '/src/style.css';
import { getWeather } from './API';

const forecastContainer = document.querySelector('#forecast');
const btnUpdateForecast = forecastContainer.querySelector('button');
let locationPara = forecastContainer.querySelector('#location');
let temperatureCelsPara = forecastContainer.querySelector('#temperatureCelc');
let descriptionPara = forecastContainer.querySelector('#description');
let location;

btnUpdateForecast.addEventListener('click', async () => {
    location = forecastContainer.querySelector('input').value;
    try {
        let weatherObj = await getWeather(location);
        outputWeather(weatherObj);
    } catch(err) {
        locationPara.textContent = 'Place: unfortunately, we couldn\'t recognise this place :\'(';
        temperatureCelsPara.textContent = 'Temperature: ';
        descriptionPara.textContent = '';
        console.log('Try again ' + err);
    }    
})

function outputWeather(weatherObj) {
    locationPara.textContent = 'Place: ' + weatherObj.location;
    temperatureCelsPara.textContent = 'Temperature: ' + weatherObj.temperatureC;
    descriptionPara.textContent = weatherObj.description;
}
