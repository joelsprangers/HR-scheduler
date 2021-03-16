import React from "react";
import "./App.css";
import DentistForm from "./forms/DentistForm";
import PatientForm from "./forms/PatientForm";
import EmployeeOveriew from "./views/EmployeeOverview";
import FormSick from "./forms/FormSick";
import PatientOverview from "./views/PatientOverview";
import FormAppointment from "./forms/FormAppointment";
import FormDeleteAppointment from "./forms/FormDeleteAppointment";
import FormChangeAppointment from "./forms/FormChangeAppointment";
import AppointmentOverview from "./views/AppointmentOverview";

export default (props) => (
  <div>
    <DentistForm addDentist={props.addDentist} />
    <PatientForm addPatient={props.addPatient} />
    <FormSick dentistSick={props.dentistSick} patientSick={props.patientSick} />
    <FormAppointment
      addAppointment={props.addAppointment}
      database={props.database}
    />
    <FormDeleteAppointment deleteAppointment={props.deleteAppointment} />
    <FormChangeAppointment changeAppointment={props.changeAppointment} />
    <EmployeeOveriew state={props.state} />
    <PatientOverview state={props.state} />
    <AppointmentOverview state={props.state} />
  </div>
);
