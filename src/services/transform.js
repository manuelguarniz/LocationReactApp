
import convert from 'convert-units'
import {
  SUNNY,
} from './../constants/weather';

const getTemp = (kelvin) => {
  return Number(convert(kelvin).from('K').to('C').toFixed(2));
}
const getWeatherState = (weather_data) => {
  return SUNNY;
}
const transformWeather = (weather_data) => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data);
  const temperature = getTemp(temp);

  const responseFormated = {
    temperature: temperature,
    weatherState: weatherState,
    humidity: humidity,
    wind: `${speed} m//s`,
  };
  return responseFormated;
}

export default transformWeather;