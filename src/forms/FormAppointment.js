import React, { Component } from "react";

class FormAppointment extends Component {
  state = {
    id: `appointment_${Math.random().toString(36).substr(2, 9)}`,
    day: "",
    time: "",
    patientId: "",
    dentistId: "",
    assistantId: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    let indexOfPatient = this.props.database.patients.findIndex(
      (patient) => patient.personId === this.state.patientId
    );
    let indexOfDentist = this.props.database.dentists.findIndex(
      (dentist) => dentist.personId === this.state.dentistId
    );

    let indexOfAssistant = this.props.database.assistants.findIndex(
      (assistant) => assistant.personId === this.state.assistantId
    );

    let appointment = {
      id: this.state.id,
      day: this.state.day,
      time: this.state.time,
      patient: this.props.database.patients[indexOfPatient],
      dentist: this.props.database.dentists[indexOfDentist],
      assistant: this.props.database.assistants[indexOfAssistant],
    };

    this.props.addAppointment(appointment);
    this.setState({
      id: `appointment_${Math.random().toString(36).substr(2, 9)}`,
      day: "",
      time: "",
      patientId: "",
      dentistId: "",
      assistantId: "",
    });
  };

  onInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="input-add-dentist" onSubmit={this.onSubmit}>
        <input
          placeholder="day appointment"
          name="day"
          onChange={this.onInput}
          value={this.state.day}
          className="input-primary"
        />
        <input
          placeholder="time appointment"
          name="time"
          onChange={this.onInput}
          value={this.state.time}
          className="input-primary"
        />

        <input
          placeholder="patientId"
          name="patientId"
          onChange={this.onInput}
          value={this.state.patientId}
          className="input-primary"
        />

        <input
          placeholder="dentistId"
          name="dentistId"
          onChange={this.onInput}
          value={this.state.dentistId}
          className="input-primary"
        />
        <input
          placeholder="assistantId"
          name="assistantId"
          onChange={this.onInput}
          value={this.state.assistantId}
          className="input-primary"
        />

        <button className="button-addDentist" type="submit">
          add new appointment
        </button>
      </form>
    );
  }
}

export default FormAppointment;
