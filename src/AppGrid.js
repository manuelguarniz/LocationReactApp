import React from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { MuiThemeProvider } from '@material-ui/core/styles';

class App extends React.Component {
  handleSelectionLocation(city) {
    console.log(`handleSelectionLocation: ${city}`);
  }
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <h1>Grid System</h1>
          </Row>
          <Row>
            <h5>Las columnas se muestran en la misma fila mientras sumen 12</h5>
          </Row>
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
    );
  }
}

export default App;
