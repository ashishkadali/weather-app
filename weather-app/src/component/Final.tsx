import React, { Component } from "react";
import "../Styles/Final.scss";
import { Container } from "react-bootstrap";
import Searchbox from "./Searchbox";

type propsdata = {};

type state = {
  data: [];
  country: string;
  city: string;
};
export default class Final extends Component<propsdata, state> {
  constructor(props: propsdata) {
    super(props);
    this.state = {
      data: [],
      country: "",
      city: "",
    };
  }
  render() {
    return (
      <>
        <Container className="mainContainer">
          <p className="headingContainer">Weather App</p>
          {/* <div className="searchContainer"> */}
          <Searchbox />
          {/* </div> */}
        </Container>
      </>
    );
  }
}
