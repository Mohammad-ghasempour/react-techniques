import React from "react";
import { FormattedDate } from "./FormattedDate";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.differ =
      this.props.city === "Stavanger"
        ? 0
        : this.props.city === "Tehran"
        ? 2.5
        : 6;
  } // 6 mens the city is NewYork!

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <>
        <div style={{ marginBottom: "40px" }}></div>
        <hr />
        <h4>
          Hello<span style={{ color: "burlywood" }}> {this.props.city} </span>
        </h4>
        <h4>
          Time is: <FormattedDate date={this.state.date} differ={this.differ} />
        </h4>
      </>
    );
  }
}
export default Clock;
