import React, { Component } from "react";
import "../Styles/Searchbox.scss";
import axios from "axios";
import Bodyone from "./Body1";
import { api_key, task } from "../data";
import Body2 from "./Body2";

interface statedata {
  country: string;
  city: string;
  weatherList: Array<task>;
  // isSubmitting: boolean;
}

// process.env.API_KEY;

export default class Searchbox extends Component<{}, statedata> {
  constructor(props: {}) {
    super(props);
    this.state = {
      country: "",
      city: "",
      weatherList: [],
      // isSubmitting: false,
    };
  }

  cityUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ city: event.target.value });
  };

  countryUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ country: event.target.value });
  };

  handleClick = async () => {
    this.setState({ weatherList: [] });

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${this.state.city},${this.state.country}`
      );

      const data = {
        location: response.data.location.name,
        country: response.data.location.country,
        last_update: response.data.current.last_updated,
        temp_c: response.data.current.temp_c,
        icon: response.data.current.condition.icon,
        text: response.data.current.condition.text,
        high: response.data.forecast["forecastday"][0]["day"]["maxtemp_c"],
        low: response.data.forecast["forecastday"][0]["day"]["mintemp_c"],
        wind_kph: response.data.current.wind_kph,
        humidity: response.data.current.humidity,
        wind_degree: response.data.current.wind_degree,
        pressure_mb: response.data.current.pressure_mb,
        sunrise: response.data.forecast["forecastday"][0]["astro"]["sunrise"],
        sunset: response.data.forecast["forecastday"][0]["astro"]["sunset"],
        vis_km: response.data.current.vis_km,
      };

      this.setState({ weatherList: [...this.state.weatherList, data] });
      // this.setState({ isSubmitting: false });
      // this.setState({city: "", country: ""})
    } catch (error) {
      if (error) throw error;
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <div className="serachContainer">
          <div className="input1">
            <input
              type="text"
              placeholder="city"
              value={this.state.city}
              className="inputbutton"
              onChange={this.cityUpdate}
            />
          </div>
          <div className="input1">
            <input
              type="text"
              placeholder="Country"
              value={this.state.country}
              className="inputbutton"
              onChange={this.countryUpdate}
            />
          </div>
          <div className="submit">
            <input
              // disabled={this.state.isSubmitting} // disable the button if isSubmitting is true
              type="submit"
              width="40%"
              className="submitbutton"
              onClick={this.handleClick}
            />
          </div>
        </div>

        <Bodyone values={this.state.weatherList} />
        <Body2 values={this.state.weatherList} />
      </>
    );
  }
}
