import React, { Component } from "react";
import "./Bai3.css";
var food = new Array();
food[0] = { name: "socola", price: "20000" };
food[1] = { name: "socola", price: "10000" };
food[2] = { name: "banh mut", price: "30000" };
class Bai3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: food,
      name1: null,
      price1: null
    };
  }
  selectname(type) {
    let a = new Array();
    for (let i = 0; i < food.length; i++) {
      a[i] = food[i][type];
    }
    for (let i = 1; i < a.length; i++) {
      for (let j = 0; j < i; j++) {
        if (a[i] === a[j]) {
          for (let k = i; k < a.length; k++) {
            a[k] = a[k + 1];
            a.length--;
            i--;
          }
        }
      }
    }
    return a;
  }
  search(type, value) {
    if (value === "all") {
      this.setState({
        table: food
      });
    } else {
      let a = new Array();
      let k = 0;
      for (let i = 0; i < food.length; i++) {
        if (food[i][type] === value) a[k++] = food[i];
      }
      this.setState({
        table: a
      });
    }
  }
  render() {
    // thuat toan loc search
    let timten = this.selectname("name");
    let timgia = this.selectname("price");

    const context = this.state.table.map((r, index) => (
      <tr key={index}>
        <td>{r.name}</td>
        <td>{r.price}</td>
      </tr>
    ));
    const ten = timten.map((r, index) => (
      <option id={index} value={r} key={index}>
        {r}
      </option>
    ));
    const gia = timgia.map((r, index) => (
      <option id={index} value={r} key={index}>
        {r}
      </option>
    ));
    return (
      <div className="nen">
        <div className=" bai3 chinh container">
          <div className="bai3 title container">
            <h1>Menu</h1>
          </div>
          <div>
            <div className="bai3 add container-fluid">
              <label>Ten Mon An:</label>
              <input
                type="text"
                onChange={e => this.setState({ name1: e.target.value })}
              />
              <label>Gia Tien:</label>
              <input
                type="text"
                onChange={e => this.setState({ price1: e.target.value })}
              />
              <button
                className="bai3 btn btn-primary"
                onClick={() => {
                  if (this.state.name1 != null && this.state.price1 != null) {
                    let a = {
                      name: this.state.name1,
                      price: this.state.price1
                    };
                    food.push(a);
                    this.setState({ table: food });
                  } else alert("chua nhap gia tri");
                }}
              >
                Them moi
              </button>
            </div>
            <div className="bai3 search container">
              <div>
                <label>Ten Mon An:</label>
                <select
                  id="name"
                  className="custom-select"
                  onChange={e => this.search("name", e.target.value)}
                >
                  <option value="all">Tat ca</option>
                  {ten}
                </select>
              </div>
              <div>
                <label>Gia Tien:</label>
                <select
                  id="price"
                  className="custom-select"
                  onChange={e => this.search("price", e.target.value)}
                >
                  <option value="all">Tat ca </option>
                  {gia}
                </select>
              </div>
            </div>
            <div>
              <table className=" container-fluid table table-hover">
                <thead>
                  <tr>
                    <th>Mon An</th>
                    <th>Gia</th>
                  </tr>
                </thead>
                <tbody>{context}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bai3;
