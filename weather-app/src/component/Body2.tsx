import React, { Component } from "react";
import { task } from "../data";
import "../Styles/Body2.scss";

type propsdata = {
  values: Array<task>;
};

export default class Body2 extends Component<propsdata, {}> {
  constructor(props: propsdata) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="bodyTwoContainer">
          {this.props.values.map((weatherItem, index) => (
            <>
              <div className="one">
                <p className="oneText">
                  High/Low{" "}
                  <span className="oneTextInner">
                    {weatherItem.high}/{weatherItem.low}
                  </span>
                </p>
                <p className="oneText">
                  Wind{" "}
                  <span className="oneTextInnerWind1">
                    {weatherItem.wind_kph}Km/hr
                  </span>
                </p>
              </div>
              <div className="two">
                <p className="oneText">
                  Humidity{" "}
                  <span className="oneTextInnerWind1">
                    {weatherItem.humidity}%
                  </span>
                </p>
                <p className="oneText">
                  Wind-Direction{" "}
                  <span className="oneTextInnerWind">
                    {weatherItem.wind_degree}deg
                  </span>
                </p>
              </div>
              <div className="three">
                <p className="oneText">
                  Pressure{" "}
                  <span className="oneTextInnerPressure">
                    {weatherItem.pressure_mb}hPa
                  </span>
                </p>
                <p className="oneText">
                  Sunrise{" "}
                  <span className="oneTextInnerPressure">
                    {weatherItem.sunrise}
                  </span>
                </p>
              </div>
              <div className="four">
                <p className="oneText">
                  {" "}
                  Visability{" "}
                  <span className="oneTextInnerWind1">
                    {weatherItem.vis_km}km
                  </span>
                </p>
                <p className="oneText">
                  Sunset{" "}
                  <span className="oneTextInnerPressure">
                    {weatherItem.sunset}
                  </span>
                </p>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}
