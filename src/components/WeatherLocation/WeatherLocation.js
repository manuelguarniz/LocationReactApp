import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Location from './Location';
import WeatherData from './WeatherData/WeatherData';
import './styles.css';
import transformWeather from '../../services/transform';
import api_weather from '../../constants/api_url';

class WeatherLocation extends React.Component {
  constructor() {
    super();
    this.state = {
      city: 'Bolivia',
      data: null,
    };
  }
  componentDidMount() {
    this.handleUpdateClick();
  }
  handleUpdateClick() {
    fetch(api_weather).then(res => {
      return res.json();
    }).then(data => {
      const currentWeather = transformWeather(data);
      this.setState({
        city: data.name,
        data: currentWeather,
      });
    });
  }
  render() {
    const { city, data } = this.state;
    return (
      <div className='weatherLocationCont'>
        <Location city={city}></Location>
        {
          data
          ? <WeatherData data={data}></WeatherData>
          : <CircularProgress size={50} />
        }
        {/* <button onClick={this.handleUpdateClick.bind(this)}>Update</button> */}
      </div>
    );
  }
}

export default WeatherLocation;