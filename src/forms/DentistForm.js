import React, { Component } from "react";

class DentistForm extends Component {
  state = {
    personId: `dentist_${Math.random().toString(36).substr(2, 9)}`,
    name: "",
    surname: "",
    phone: "",
    mail: "",
    isSick: false,
  };

  onSubmit = (e) => {
    e.preventDefault();
    let dentist = this.state;
    this.props.addDentist(dentist);
    this.setState({
      personId: `dentist_${Math.random().toString(36).substr(2, 9)}`,
      name: "",
      surname: "",
      phone: "",
      mail: "",
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
          placeholder="first name dentist"
          name="name"
          onChange={this.onInput}
          value={this.state.firstName}
          className="input-primary"
        />
        <input
          placeholder="last name dentist"
          name="surname"
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
          add dentist
        </button>
      </form>
    );
  }
}

export default DentistForm;
