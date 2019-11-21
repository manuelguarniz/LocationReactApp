import React from 'react';
import {
  Paper,
  AppBar,
  Typography,
  Toolbar,
} from '@material-ui/core';
import LocationList from './components/LocationList';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Washington,us',
  'Trujillo,pe',
  'Santiago,cl',
  'Madrid,es',
];

class App extends React.Component {
  constructor() {
    super()
    this.state = { city: 'Trujillo, pe' };
  }
  handleSelectionLocation(city) {
    this.setState({city: city});
    console.log(`handleSelectionLocation: ${city}`);
  }
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h5' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities}
              onSelectLocation={this.handleSelectionLocation.bind(this)}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className='details'>
                <ForecastExtended city={city}/>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
