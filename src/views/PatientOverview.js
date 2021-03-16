import React from "react";

const PatientOverview = (props) => {
  let patientList = props.state.patients;

  return (
    <div className="patient-table">
      patient list
      <table>
        <thead>
          <tr className="patient-header">
            <th className="patient-row__item">first name</th>
            <th className="patient-row__item">last name</th>
            <th className="patient-row__item">person id</th>
            <th className="patient-row__item">birth year</th>
            <th className="patient-row__item">status</th>
          </tr>
        </thead>
        <tbody className="patient-list">
          {patientList.map((patient) => {
            return (
              <tr key={patient.personId} className="patient-row">
                <td key="patient-name" className="patient-item">
                  {patient.name === "" ? "unknown" : patient.name.split(" ")[0]}
                </td>
                <td key="patient-surname" className="patient-item">
                  {patient.surname === ""
                    ? "unknown"
                    : `${patient.name.split(" ").slice(1, -1)} ${
                        patient.surname
                      }`}
                </td>
                <td key="patient-personId" className="patient-item">
                  {patient.personId === "" ? "unknown" : patient.personId}
                </td>
                <td key="patient-birthYear" className="patient-item">
                  {patient.personId === "" ? "unknown" : patient.birthYear}
                </td>
                <td key="patient-isSick" className="patient-item">
                  {patient.isSick ? "is sick" : "healthy"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PatientOverview;
