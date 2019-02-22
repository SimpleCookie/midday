import React, { Component } from "react";
import Moment from "moment";

interface State {
  hours: number;
  minutes: number;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0
    };
  }

  componentDidMount() {
    this.getTimeLeft();
    setInterval(this.getTimeLeft, 5000);
  }

  getTimeLeft = () => {
    const now = Moment();
    let midday;
    if (now.hour() > 15) {
      midday = now.add("hour", 25 - now.hour()).hours(12);
    } else {
      midday = Moment().hours(12);
    }
    const diff = Moment.duration(midday.diff(Moment()));
    this.setState({
      hours: Math.floor(diff.asHours()),
      minutes: Math.ceil(diff.asMinutes() / 60)
    });
  };

  isItMidday = () => {
    const now = Moment().hour();
    return now >= 12 && now < 15;
  };
  render() {
    if (this.isItMidday()) {
      return (
        <h2 style={{ color: "green", fontWeight: "bold" }}>
          Ja det är middag!
        </h2>
      );
    }
    const { hours, minutes } = this.state;
    return (
      <div>
        <p className="no-midday no-midday-2">Nej</p>
        <p className="no-midday">Nej</p>
        <div className="countdown">
          Det är {hours} timmar och {minutes} minuter kvar
        </div>
      </div>
    );
  }
}

export default App;
