import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Bai1 from "./Bai1/Bai1";
import Bai2 from "./Bai2/Bai2";
import Bai3 from "./Bai3/Bai3";
import "./Main.css";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baitap: <Bai2 />
    };
  }
  render() {
    const navbar = (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#baitap"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="baitap">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="http://localhost:3000/#"
                    onClick={() => this.setState({ baitap: <Bai1 /> })}
                  >
                    Bai1
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="http://localhost:3000/"
                    onClick={() => this.setState({ baitap: <Bai2 /> })}
                  >
                    Bai2
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="http://localhost:3000/#"
                    onClick={() => this.setState({ baitap: <Bai3 /> })}
                  >
                    Bai3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>{this.state.baitap}</div>
      </div>
    );
    return <div>{navbar}</div>;
  }
}

export default Main;
