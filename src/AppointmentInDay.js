import React from "react";

const format_time = (time) => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, dentist, assistant }) => (
  <li className="appointment">
    <div className="time">{format_time(time)}</div>
    <div className={patient.isSick ? "patient text-red" : "patient"}>
      Patiënt: {patient.name.split(" ")[0]}
    </div>
    <div className={dentist.isSick ? "dentist text-red" : "dentist"}>
      Tandarts: {dentist.name.split(" ")[0]}
    </div>
    <div className="assistant">
      Assistent: {assistant ? assistant : "niet noodzakelijk"}
    </div>
  </li>
);
