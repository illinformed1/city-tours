import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  render() {
    console.log(this.props);
    return (
      <article className="tour">
        <div className="img-container">
          <img
            src={this.props.tour.img}
            alt="Little boxs on the hillside little boxes made of ticky tack little boxes on the hillside little boxes all the same"
          />
          <span
            className="close-btn"
            onClick={() => this.props.handleDelete(this.props.tour.id)}
          >
            <i className="fas fa-window-close" />
          </span>
          <div className="tour-info">
            <h3>{this.props.tour.city}</h3>
            <h4>{this.props.tour.name}</h4>
            <h5>
              info
              <span>
                <i className="fas fa-caret-square-down" />
              </span>
            </h5>
            <p>{this.props.tour.info}</p>
          </div>
        </div>
      </article>
    );
  }
}
