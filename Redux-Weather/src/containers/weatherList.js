import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
    return (
      <tr key={cityName}>
        <td>{cityName}</td>
      </tr>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
