import React from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { MuiThemeProvider } from '@material-ui/core/styles';

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
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className='red'></div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className='green'></div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className='blue'></div>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
      // <div className="App">
      //   <LocationList cities={cities}
      //     onSelectLocation={this.handleSelectionLocation}/>
      // </div>
    );
  }
}

export default App;
