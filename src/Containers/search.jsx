import React, {Component} from 'react';
import Weather from '../Components/weather';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            weatherData: [],
            dataLoaded: false,
            url: "http://api.openweathermap.org/data/2.5/weather?APPID=887c9cc4ba94f7c2bdca2fb8846dbe52&q=",
            searchLocation: "London",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const location = this.state.url + this.state.searchLocation
        fetch(location)
            .then(res => res.json())
            .then((result) => {     
                this.setState({
                    dataLoaded: true,
                    weatherData: result,
                });        
            },
            (error) => {
                this.setState({
                    dataLoaded: true,
                    error,
                });
            })
    }
  

    handleChange(event) {
        const location = event.target.value;        
        event.preventDefault(); 
        this.setState({
            searchLocation: location,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const location = this.state.url + this.state.searchLocation;        
        console.log("location", location);
        this.componentDidMount()
    }

    render() {
        const { dataLoaded, error, weatherData } = this.state;
        if (!dataLoaded) {
            return (
                <div>Loading...</div>
            )
        } else if (error) {
            return (
                <div>Error: {error.message}</div>
            )
        } else {
            console.log("loaded data", weatherData);
            
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className="searchLocation"
                            type="text"
                            placeholder="City Name"
                            name="searchLocation"
                            onChange={this.handleChange}
                            value={this.state.searchLocation}
                        />
                        <button>Search</button>
                    </form>
                    <Weather weatherData={weatherData}></Weather>
                </div>
            )
        }
    }
}

export default Search;