import React from "react";

const EmployeeOverview = (props) => {
  let dentistList = props.state.dentists;
  let assistantList = props.state.assistants;
  console.log(dentistList);

  return (
    <div>
      <div className="dentist-table">
        Dentist list
        <table>
          <thead>
            <tr className="dentist-header">
              <th className="dentist-row__item">first name</th>
              <th className="dentist-row__item">last name</th>
              <th className="dentist-row__item">person id</th>
              <th className="dentist-row__item">status</th>
              <th className="dentist-row__item">delete</th>
            </tr>
          </thead>
          <tbody className="dentist-list">
            {dentistList.map((dentist) => {
              return (
                <tr key={dentist.personId} className="dentist-row">
                  <td key="dentist-name" className="dentist-item">
                    {dentist.name === ""
                      ? "unknown"
                      : dentist.name.split(" ")[0]}
                  </td>
                  <td key="dentist-surname" className="dentist-item">
                    {dentist.surname === ""
                      ? "unknown"
                      : `${dentist.name.split(" ").slice(1, -1)} ${
                          dentist.surname
                        }`}
                  </td>
                  <td key="dentist-personId" className="dentist-item">
                    {dentist.personId === "" ? "unknown" : dentist.personId}
                  </td>
                  <td key="dentist-isSick" className="dentist-item">
                    {dentist.isSick ? "is sick" : "healthy"}
                  </td>
                  <td
                    className="dentist-delete"
                    id={dentist.personId}
                    key={dentist.personId}
                    //onClick={props.}
                  >
                    {" "}
                    --delete--{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="dentist-table">
        Assistant list
        <table>
          <thead>
            <tr className="header">
              <th className="row__item">first name</th>
              <th className="row__item">last name</th>
              <th className="row__item">person id</th>
              <th className="row__item">status</th>
              <th className="row__item">delete</th>
            </tr>
          </thead>
          <tbody className="assistant-list">
            {assistantList.map((assistant) => {
              return (
                <tr key={assistant.personId} className="assistant-row">
                  <td key="assistant-name" className="assistant-item">
                    {assistant.name === ""
                      ? "unknown"
                      : assistant.name.split(" ")[0]}
                  </td>
                  <td key="assistant-surname" className="assistant-item">
                    {assistant.surname === ""
                      ? "unknown"
                      : `${assistant.name.split(" ").slice(1, -1)} ${
                          assistant.surname
                        }`}
                  </td>
                  <td key="assistant-personId" className="assistant-item">
                    {assistant.personId === "" ? "unknown" : assistant.personId}
                  </td>
                  <td key="assistant-isSick" className="assistant-item">
                    {assistant.isSick ? "is sick" : "healthy"}
                  </td>
                  <td
                    className="assistant-delete"
                    id={assistant.personId}
                    key={assistant.personId}
                    //onClick={props.}
                  >
                    {" "}
                    --delete--{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeOverview;
