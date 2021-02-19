import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";
import createInitialState from "./utils";

class Main extends Component {
  constructor() {
    super();
    this.state = createInitialState();

    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.makePatientSick = this.makePatientSick.bind(this);
  }

  addDentist = (dentist) => {
    this.setState({ dentists: this.state.dentists.concat(dentist) });
  };

  addPatient = (patient) => {
    this.setState({ patients: this.state.patients.concat(patient) });
  };

  makeDentistSick = (dentistId) => {
    let indexOfDentist = this.state.dentists.findIndex(
      (dentist) => dentist.personId === dentistId
    );

    if (indexOfDentist !== -1) {
      let dentistList = [...this.state.dentists];
      let healthStatus = dentistList[indexOfDentist].isSick;

      this.setState((prevState) => {
        dentistList[indexOfDentist].isSick = !healthStatus;
        let newState = { ...prevState, dentists: dentistList };
        return newState;
      });
    } else {
      return alert(
        "This dentist personId is not registered. Please try again."
      );
    }
  };

  makePatientSick = (patientId) => {
    let indexOfPatient = this.state.patients.findIndex(
      (patient) => patient.personId === patientId
    );

    this.state.appointments.map((appointment) => {
      if (appointment.patient.personId === patientId) {
        let id = appointment.id;
        let indexOfAppointment = this.state.appointments.findIndex(
          (appointment) => appointment.id === id
        );

        console.log(indexOfAppointment);
        this.state.appointments.splice(indexOfAppointment, 1);

        this.setState((prevState) => {
          let newState = { ...prevState };
          console.log(newState.appointments);
          return newState;
        });
      }
    });

    if (indexOfPatient !== -1) {
      let patientList = [...this.state.patients];
      let healthStatus = patientList[indexOfPatient].isSick;

      this.setState((prevState) => {
        patientList[indexOfPatient].isSick = !healthStatus;
        let newState = { ...prevState, patients: patientList };
        return newState;
      });
    } else {
      return alert(
        "This dentist personId is not registered. Please try again."
      );
    }
  };

  addAppointment = (appointment) => {
    this.setState({
      appointments: this.state.appointments.concat(appointment),
    });
  };

  deleteAppointment = (appointmentId) => {
    let indexOfAppointment = this.state.appointments.findIndex(
      (appointment) => appointment.id === appointmentId
    );

    console.log(indexOfAppointment);

    this.setState({
      appointments: this.state.appointments.splice(indexOfAppointment, 1),
    });
  };

  render() {
    return (
      <main>
        <Switch>
          <Route path="/calendar">
            <Calendar
              appointments={this.state.appointments}
              patients={this.state.patient}
            />
          </Route>
          <Route path="/day">
            <Day
              appointments={this.state.appointments.filter(
                (appointment) => appointment.day === 5
              )}
            />
          </Route>
          <Route path="/">
            <Home
              database={this.state}
              state={this.state}
              deleteAppointment={this.deleteAppointment}
              addAppointment={this.addAppointment}
              addDentist={this.addDentist}
              addPatient={this.addPatient}
              dentistSick={this.makeDentistSick}
              patientSick={this.makePatientSick}
            />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
