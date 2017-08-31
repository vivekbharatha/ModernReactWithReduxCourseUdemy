import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from './../components/chart';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  renderWeather(cityObj) {
    const cityName = cityObj.city.name;
    const temps = cityObj.list.map(weather => weather.main.temp);
    const pressure = cityObj.list.map(weather => weather.main.pressure);
    const humidity = cityObj.list.map(weather => weather.main.humidity);

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td><Chart data={temps} color="red" units="K"/></td>
        <td><Chart data={pressure} color="blue" units="hPa"/></td>
        <td><Chart data={humidity} color="black" units="%"/></td>
      </tr>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
