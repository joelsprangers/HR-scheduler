import React from "react";
import "./App.css";
import DentistForm from "./forms/DentistForm";
import PatientForm from "./forms/PatientForm";
import EmployeeOveriew from "./views/EmployeeOverview";
import FormSick from "./forms/FormSick";
import PatientOverview from "./views/PatientOverview";
import FormAppointment from "./forms/FormAppointment";

export default (props) => (
  <div>
    <EmployeeOveriew state={props.state} />
    <DentistForm addDentist={props.addDentist} />
    <PatientForm addPatient={props.addPatient} />
    <FormSick dentistSick={props.dentistSick} patientSick={props.patientSick} />
    <FormAppointment
      addAppointment={props.addAppointment}
      deleteAppointment={props.deleteAppointment}
      database={props.database}
    />
    <PatientOverview state={props.state} />
  </div>
);
