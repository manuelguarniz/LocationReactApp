
import convert from 'convert-units'
import {
  THUNDER,
  DRIZZLE,
  RAIN,
  SNOW,
  SUN,
  CLOUDY,
} from './../constants/weather';

const getTemp = (kelvin) => {
  return Number(convert(kelvin).from('K').to('C').toFixed(2));
}
const getWeatherState = (weather) => {
  const { id } = weather;
  if (id < 300)
    return THUNDER;
  else if (id < 400)
    return DRIZZLE;
  else if (id < 500)
    return RAIN;
  else if (id < 700)
    return SNOW;
  else if (id === 800)
    return SUN;
  else
    return CLOUDY;
}
const transformWeather = (weather_data) => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data.weather[0]);
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