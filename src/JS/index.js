import '/src/style.css';
import { getWeather } from './API';

const forecastContainer = document.querySelector('#forecast');
const btnUpdateForecast = forecastContainer.querySelector('button');
let location;

btnUpdateForecast.addEventListener('click', () => {
    location = forecastContainer.querySelector('input').value;
    getWeather(location).catch(handleError);
})

function handleError(err) {
    console.log('Oopsie ' + err);
}
