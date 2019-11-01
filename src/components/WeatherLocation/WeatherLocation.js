import React from 'react'
import Location from './Location';
import WeatherData from './WeatherData/WeatherData';
import './styles.css';
import {
  SUN,
} from './../../constants/weather';

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
};

class WeatherLocation extends React.Component {
  constructor() {
    super();
    this.state = {
      city: 'Bolivia',
      data: data,
    };
  }
  handleUpdateClick() {
    console.log('Actualizar')
  }
  render() {
    const { city, data } = this.state;
    return (
      <div className='weatherLocationCont'>
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;