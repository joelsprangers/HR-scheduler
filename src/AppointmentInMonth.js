import React from "react";

const format_time = (time) => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, dentist }) => (
  <div className="appointment">
    <span className={dentist.isSick ? "dentist-sick" : "time"}>
      {format_time(time)}
    </span>
    <span className={patient.isSick ? "patient text-red" : "patient"}>
      {patient.name.split(" ")[0]}{" "}
    </span>
  </div>
);
