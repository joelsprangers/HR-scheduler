import React, { Component } from "react";

class FormDeleteAppointment extends Component {
  state = {
    id: "",
  };

  onDeleteAppointment = (event) => {
    event.preventDefault();
    let id = this.state.id;
    this.props.deleteAppointment(id);
    this.setState({
      id: "",
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
          onSubmit={this.onDeleteAppointment}
        >
          <input
            placeholder="id to delete"
            name="id"
            onChange={this.onInput}
            value={this.state.id}
            className="input-primary"
          />

          <button className="button-delete-appointment" type="submit">
            delete appointment
          </button>
        </form>
      </div>
    );
  }
}

export default FormDeleteAppointment;
