import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "./tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  handleDelete = id => {
    const { tours } = this.state;
    const tempData = tours.filter(tour => tour.id !== id);
    this.setState({ tours: tempData });
  };

  render() {
    const Tours = this.state.tours.map(tour => (
      <Tour key={tour.id} tour={tour} handleDelete={this.handleDelete} />
    ));
    return <section className="tourlist">{Tours}</section>;
  }
}
