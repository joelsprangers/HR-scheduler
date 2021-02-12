import React, { Component } from "react";
import "./App.css";
import createInitialState from "./utils";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

class Main extends Component {
  constructor() {
    super();
    this.state = createInitialState();
  }
  

  render() {
    return (
      <main>
        <Switch>
          <Route path="/calendar">
            <Calendar appointments={this.state.appointments} />
          </Route>
          <Route path="/day">
            <Day
              appointments={this.state.appointments.filter(
                (app) => app.day === 1
              )}
            />
          </Route>
          <Route path="/">
            <Home state={this.state} />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
