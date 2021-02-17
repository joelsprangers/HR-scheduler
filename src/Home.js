import React from "react";
import "./App.css";
import DentistForm from "./forms/DentistForm";
import PatientForm from "./forms/PatientForm";
import EmployeeOveriew from "./EmployeeOverview";
import FormSick from "./forms/FormSick";

export default (props) => (
  <div>
    <EmployeeOveriew state={props.state} />
    <DentistForm addDentist={props.addDentist} />
    <PatientForm addPatient={props.addPatient} />
    <FormSick dentistSick={props.dentistSick} patientSick={props.patientSick} />
  </div>
);
