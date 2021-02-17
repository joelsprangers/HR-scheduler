import { names } from "./randomNames";

const getRandomLastName = () => {
  const person = names[Math.floor(Math.random() * 250)];
  return `${person.surname}`;
};

const getRandomFirstName = () => {
  const person = names[Math.floor(Math.random() * 250)];
  return `${person.name}`;
};

const createMobileNumber = () => {
  return `06-${Math.floor(Math.random() * 99999999)}`;
};

const generatePerson = () => ({
  name: getRandomFirstName(),
  surname: getRandomLastName(),
  phone: createMobileNumber(),
});

const createRandomBirthYear = () => {
  let year;
  while (true) {
    year = Math.floor(Math.random() * 2020);
    if (year > 1900 && year < 2021) {
      return year;
    }
  }
};

const createId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomWeekday = () => {
  let day;
  while (true) {
    day = Math.floor(Math.random() * 28);
    if (
      (day > 0 && day < 6) ||
      (day > 7 && day < 13) ||
      (day > 14 && day < 20) ||
      (day > 21 && day < 27)
    ) {
      return day;
    }
  }
};

const addDentist = () => {
  const person = generatePerson();
  return {
    ...person,
    ...{
      mail: `${person.name.replace(/\s/g, "")}.${
        person.surname
      }@tandartspraktijkbvt.nl`,
      isSick: false,
      personId: `dentist${createId()}`,
    },
  };
};

const addAssistant = () => {
  const person = generatePerson();
  return {
    ...person,
    ...{
      mail: `${person.name.replace(/\s/g, "")}.${
        person.surname
      }@tandartspraktijkbvt.nl`,
      isSick: false,
      personId: `assistant${createId()}`,
    },
  };
};

const addPatient = () => {
  const person = generatePerson();
  return {
    ...person,
    ...{
      mail: `${person.name.replace(/\s/g, "")}.${
        person.surname
      }@wincacademy.nl`,
      isSick: false,
      personId: `patient${createId()}`,
      birthYear: createRandomBirthYear(),
    },
  };
};

const generateGroup = (num, func) => Array(num).fill(0).map(func);

const getRandomPerson = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateRandomAppointment = (people) => {
  const appointment = {
    id: `appointment${createId()}`,
    day: getRandomWeekday(),
    time: getRandomTime(),
    patient: getRandomPerson(people.patients).personId,
    dentist: getRandomPerson(people.dentists).personId,
  };

  if (Math.random() < 0.5) {
    appointment.assistant = getRandomPerson(people.assistants).personId;
  }

  return appointment;
};

const generateRandomAppointments = (people, num_appointments) =>
  generateGroup(num_appointments, () => generateRandomAppointment(people));

const createInitialState = () => {
  const people = {
    dentists: generateGroup(4, addDentist),
    assistants: generateGroup(2, addAssistant),
    patients: generateGroup(50, addPatient),
  };
  const appointments = generateRandomAppointments(people, 150);

  return {
    ...people,
    ...{ appointments },
  };
};

export default createInitialState;
