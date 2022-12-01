import React from "react";

export class FormattedDate extends React.Component {
  Time(differ) {
    const currentTime = this.props.date;
    currentTime.setTime(currentTime.getTime() + differ * 60 * 60 * 1000);
    return currentTime.toLocaleTimeString();
  }

  render() {
    const LocalizationTime = this.Time(this.props.differ);
    return LocalizationTime;
  }
}
