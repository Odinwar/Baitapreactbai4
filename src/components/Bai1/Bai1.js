import React, { Component } from "react";

import "./Bai1.css";
class Bai1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div className="main">
        <div>
          <h1 className="container bg-dark">React Click</h1>
        </div>
        <div className="main1 container ">
          <div className="context bg-light">
            <p>{this.state.count}</p>
          </div>
          <div>
            <img
              className="imgg"
              src={require("./cong.png")}
              onClick={() => this.setState({ count: this.state.count + 1 })}
            />
            <img
              className="imgg"
              src={require("./reset.png")}
              onClick={() => this.setState({ count: 0 })}
            />
            <img
              className="imgg"
              src={require("./tru.png")}
              onClick={() => this.setState({ count: this.state.count - 1 })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Bai1;
