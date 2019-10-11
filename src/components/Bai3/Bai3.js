import React, { Component } from "react";
import "./Bai3.css";
var food = new Array();
food[0] = { name: "socola", price: 20000 };
food[1] = { name: "socola", price: 20000 };

class Bai3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: food,
      name1: null,
      price1: null
    };
  }
  searchname() {
    let a = new Array();
    for (let i = 0; i < food.length; i++) {
      a[i] = food[i].name;
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
  searchgia() {
    let a = new Array();
    for (let i = 0; i < food.length; i++) {
      a[i] = food[i].price;
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
  render() {
    // thuat toan loc search
    let timten = this.searchname();
    let timgia = this.searchgia();
    console.log(timgia);
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
      <div className="container">
        <div className="container">
          <h1>Menu</h1>
        </div>
        <div>
          <div className="container">
            Ten Mon An:
            <input
              type="text"
              onChange={e => this.setState({ name1: e.target.value })}
            />
            Gia Tien
            <input
              type="text"
              onChange={e => this.setState({ price1: e.target.value })}
            />
            <input
              type="button"
              onClick={() => {
                let a = { name: this.state.name1, price: this.state.price1 };
                food.push(a);
                this.setState({ table: food });
              }}
              value="add"
            />
          </div>
          <div className="search">
            <div>
              <form action="/action_page.php">
                Mon An:
                <select id="helo" name="cars" className="custom-select">
                  {ten}
                </select>
              </form>
            </div>
            <div>
              <form action="/action_page.php">
                Gia Tien:
                <select name="cars" className="custom-select">
                  {gia}
                </select>
              </form>
            </div>
            <div>
              <button
                onClick={() => {
                  console.log(document.getElementById("helo").value);
                }}
              >
                search
              </button>
            </div>
          </div>
          <div>
            <table className=" container table table-hover">
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
    );
  }
}

export default Bai3;
