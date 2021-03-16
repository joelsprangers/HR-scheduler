import React, { Component } from "react";

class FormSick extends Component {
  state = {
    dentistId: "",
    patientId: "",
  };

  onSubmitDentist = (event) => {
    event.preventDefault();
    let dentistId = this.state.dentistId;
    this.props.dentistSick(dentistId);
    this.setState({
      dentistId: "",
      patientId: "",
    });
  };

  onSubmitPatient = (event) => {
    event.preventDefault();
    let patientId = this.state.patientId;
    this.props.patientSick(patientId);
    this.setState({
      dentistId: "",
      patientId: "",
    });
  };

  onInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form className="sick-dentist" onSubmit={this.onSubmitDentist}>
          <input
            placeholder="personId sick dentist"
            name="dentistId"
            onChange={this.onInput}
            value={this.state.dentistId}
            className="input-primary"
          />

          <button className="button-sickDentist" type="submit">
            report dentist sick (turn red on calendar)
          </button>
        </form>
        <form className="sick-patient" onSubmit={this.onSubmitPatient}>
          <input
            placeholder="personId sick patient"
            name="patientId"
            onChange={this.onInput}
            value={this.state.patientId}
            className="input-primary"
          />

          <button className="button-addDentist" type="submit">
            report patient sick (delete all patient appointments)
          </button>
        </form>
      </div>
    );
  }
}

export default FormSick;
