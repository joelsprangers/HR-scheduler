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
      this.setState((prevState) => {
        let dentistList = [...prevState.dentists];
        dentistList[indexOfDentist].isSick = !dentistList[indexOfDentist].isSick
          .value;
        let newState = { ...prevState, dentists: dentistList };
        console.log(indexOfDentist);
        return newState;
      });
    } else {
      return alert("This personId is not registered. Please try again.");
    }
  };

  makePatientSick = (patientId) => {
    let indexOfPatient = this.state.patients.findIndex(
      (patient) => patient.personId === patientId
    );

    if (indexOfPatient !== -1) {
      this.setState((prevState) => {
        let patientList = [...prevState.dentists];
        patientList[indexOfPatient].isSick = true;
        let newState = { ...prevState, patients: patientList };
        return newState;
      });
    }
    return alert("This personId is not registered. Please try again.");
  };

  addAppointment = (
    chooseDayNumber,
    chooseTime,
    patientId,
    chooseDentistId,
    needsAssistance,
    assistantId
  ) => {
    const appointment = {
      id: `appointment${Math.random().toString(36).substr(2, 9)}`,
      day: chooseDayNumber,
      time: chooseTime,
      patient: patientId,
      dentist: chooseDentistId,
    };

    if (needsAssistance) {
      appointment.assistant = assistantId;
    }

    this.setState({
      appointments: this.state.appointments.concat(appointment),
    });
  };

  deleteAppointment = (appointmentId) => {
    let indexOfAppointment = this.state.appointments.findIndex(
      (appointment) => appointment.appointmentId === appointmentId
    );

    this.setState({
      appointments: this.state.appointments.splice(indexOfAppointment, 1),
    });
  };

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
                (appointment) => appointment.day === 5
              )}
            />
          </Route>
          <Route path="/">
            <Home
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
