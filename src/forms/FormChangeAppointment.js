import React, { Component } from "react";

class FormChangeAppointment extends Component {
  state = {
    id: "",
    newTime: "",
    newDay: "",
  };

  onChangeAppointment = (event) => {
    event.preventDefault();
    let id = this.state.id;
    let newTime = this.state.newTime;
    let newDay = this.state.newDay;
    this.props.changeAppointment(id, newDay, newTime);
    this.setState({
      id: "",
      newTime: "",
      newDay: "",
    });
  };

  onInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form
          className="delete-appointment"
          onSubmit={this.onChangeAppointment}
        >
          <input
            placeholder="id to change"
            name="id"
            onChange={this.onInput}
            value={this.state.id}
            className="input-primary"
          />
          <input
            placeholder="new day in numbers"
            name="newDay"
            onChange={this.onInput}
            value={this.state.newDay}
            className="input-primary"
          />
          <input
            placeholder="new time in hours"
            name="newTime"
            onChange={this.onInput}
            value={this.state.newTime}
            className="input-primary"
          />

          <button className="button-delete-appointment" type="submit">
            change appointment
          </button>
        </form>
      </div>
    );
  }
}

export default FormChangeAppointment;
