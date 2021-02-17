import React, { Component } from "react";

class PatientForm extends Component {
  state = {
    personId: `patient_${Math.random().toString(36).substr(2, 9)}`,
    name: "",
    surname: "",
    phone: "",
    mail: "",
    birthYear: "",
    isSick: false,
  };

  onSubmit = (e) => {
    e.preventDefault();
    let patient = this.state;
    this.props.addPatient(patient);
    this.setState({
      personId: `patient_${Math.random().toString(36).substr(2, 9)}`,
      name: "",
      surname: "",
      phone: "",
      mail: "",
      birthYear: "",
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
          placeholder="first name patient"
          name="name"
          onChange={this.onInput}
          value={this.state.firstName}
          className="input-primary"
        />
        <input
          placeholder="last name patient"
          name="surname"
          onChange={this.onInput}
          value={this.state.lastName}
          className="input-primary"
        />

        <input
          placeholder="birth year patient"
          name="birthYear"
          onChange={this.onInput}
          value={this.state.lastName}
          className="input-primary"
        />

        <input
          placeholder="phone number"
          name="phone"
          onChange={this.onInput}
          value={this.state.phoneNumber}
          className="input-primary"
        />
        <input
          placeholder="mail"
          name="mail"
          onChange={this.onInput}
          value={this.state.mail}
          className="input-primary"
        />

        <button className="button-addDentist" type="submit">
          add patient
        </button>
      </form>
    );
  }
}

export default PatientForm;
