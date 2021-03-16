import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments }) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist }, index) => (
      <AppointmentInMonth
        time={time}
        patient={patient}
        dentist={dentist}
        key={index}
        appointmentId={appointments.appointmentId}
      />
    )
  );
  return <div className="day">{appointmentsJSX}</div>;
};
