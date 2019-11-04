import React from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities = [
  'Washington,us',
  'Trujillo,pe',
  'Santiago,cl',
  'Madrid,es',
];
class App extends React.Component {
  handleSelectionLocation(city) {
    console.log(`handleSelectionLocation: ${city}`);
  }
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}
          onSelectLocation={this.handleSelectionLocation}/>
      </div>
    );
  }
}

export default App;
