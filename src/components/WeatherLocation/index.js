import React from 'react';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transform';
import getUrlWeatherByCity from './../../services/weather.services';

class WeatherLocation extends React.Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null,
    };
  }
  componentDidMount() {
    this.getInfoWeather();
  }
  getInfoWeather() {
    const city = getUrlWeatherByCity(this.state.city);
    fetch(city).then(res => {
      return res.json();
    }).then(data => {
      if (data.cod === 200) {
        const currentWeather = transformWeather(data);
        this.setState({
          city: data.name,
          data: currentWeather,
        });
      }
    });
  }
  render() {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    if (data)
      return (
        <div className='weatherLocationCont'
          onClick={onWeatherLocationClick}>
          <Location city={city}></Location>
          <WeatherData data={data}></WeatherData>
        </div>
      );
    else
      return (
        <div className='weatherLocationCont'>
          <CircularProgress size={50} />
        </div>
      );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;