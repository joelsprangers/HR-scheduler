import React from "react";

const AppointmentOverview = (props) => {
  let appointmentList = props.state.appointments;

  return (
    <div className="appointment-table">
      appointment list
      <table>
        <thead>
          <tr className="appointment-header">
            <th className="patient-row__item">id</th>
            <th className="patient-row__item">day</th>
            <th className="patient-row__item">hour</th>
          </tr>
        </thead>
        <tbody className="appointment-list">
          {appointmentList.map((appointment) => {
            return (
              <tr key={appointment.id} className="appointment-row">
                <td key="appointment-id" className="appointment-item">
                  {appointment.id === "" ? "unknown" : appointment.id}
                </td>
                <td key="appointment-day" className="appointment-day">
                  {appointment.day === "" ? "unknown" : appointment.day}
                </td>
                <td key="appointment-time" className="appointment-time">
                  {appointment.time === "" ? "unknown" : appointment.time}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentOverview;
