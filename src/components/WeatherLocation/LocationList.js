import React from 'react'
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation'

class LocationList extends React.Component {
  strToComponents(cities) {
    return cities.map((city, index) => (
      <WeatherLocation key={index}
        city={city}
        onWeatherLocationClick={() => this.handleWeatherLocationClick(city)}
        />
    ));
  }
  handleWeatherLocationClick(city) {
    const { onSelectLocation } = this.props;
    onSelectLocation(city);
  }
  render() {
    const { cities } = this.props;
    return(
      <div>
        {this.strToComponents(cities)}
      </div>
    );
  }
}

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectLocation: PropTypes.func,
}

export default LocationList;