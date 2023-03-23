import React, { Component } from "react";
import { task } from "../data";
import "../Styles/Body1.scss";

type propsdata = {
  values: Array<task>;
};

export default class Body1one extends Component<propsdata, {}> {
  constructor(props: propsdata) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="bodyOneContainer">
          {this.props.values.map((weatherItem, index) => (
            <>
              <div className="cityCountry">
                {weatherItem.location}, {weatherItem.country}. Weather<></>
                <p className="lastUpdate">
                  As of {weatherItem.last_update.slice(-6)}
                </p>
              </div>
              <div className="secondContainer">
                <p className="textContainer1">{weatherItem.temp_c} &#8451;</p>
                <div className="imgbox">
                  <img
                    alt="img"
                    src={weatherItem.icon}
                    width="50"
                    height="50px"
                  />
                  <p className="textContainer2">{weatherItem.text}</p>
                </div>
              </div>
              <div>
                {" "}
                <p className="textContainer3">{weatherItem.text}</p>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}
