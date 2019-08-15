import React, { Component } from 'react';

class Weather extends Component {
    constructor(props) {
        super(props);
        console.log("weather component props",props);
        
    }

    render() {
        return (
            <div className="weather">
                <p>The current weather in {this.props.weatherData.name}, {this.props.weatherData.sys.country}</p>
                <p>{this.props.weatherData.main.temp.toFixed(0) - 273}C, {this.props.weatherData.weather[0].description}, Humidity {this.props.weatherData.main.humidity}%</p>
            </div>
        );
    } 
}
export default Weather;