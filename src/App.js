import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/card-list/cardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="app">
        <div className="center">
          <input
            type="text"
            placeholder="Search Monsters"
            onChange={(e) => this.setState({ searchField: e.target.value })}
          />
        </div>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
