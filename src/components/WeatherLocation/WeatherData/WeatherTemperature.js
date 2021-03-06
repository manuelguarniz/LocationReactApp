import React from 'react';
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types';
import {
  CLOUD,
  CLOUDY,
  RAIN,
  SNOW,
  SUN,
  WINDY,
  THUNDER,
  DRIZZLE,
} from '../../../constants/weather'

const icons = {
  [CLOUD]: 'cloud',
  [CLOUDY]: 'cloudy',
  [SUN]: 'day-sunny',
  [RAIN]: 'rain',
  [SNOW]: 'snow',
  [WINDY]: 'windy',
  [THUNDER]: 'day-thunderstorm',
  [DRIZZLE]: 'drizzle',
};

const getWeatherIcon = (weatherState) => {
  const icon = icons[weatherState];
  if (icon)
    return (<WeatherIcons className='wicon' name={icon} size='2x' />);
  else
    return (<WeatherIcons className='wicon' name='day-sunny' size='2x' />);
}

const WeatherTemperature = ({ temperature, weatherState }) => {
  return(
    <div className='weatherTemperatureCont'>
      { getWeatherIcon(weatherState) }
      <span className='temperature'>{ `${temperature}` }</span>
      <span className='temperatureType'>{ ` C°` }</span>
    </div>
  );
}

// Validacion para los parametros de entrada
WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;