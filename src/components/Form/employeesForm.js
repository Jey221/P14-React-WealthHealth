import { useState } from 'react';
import States from '../../data/states.json';

export default function EmployeesForm({ addEmployee }) {
  // récupération des inputs via useRef()
  const [employeeInfo, setEmployeeInfo] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    departement: '',
  });

  // envoi du formulaire dans le localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employeeInfo);
    console.log('avt', employeeInfo);
  };
  const onChange = (e) => {
    setEmployeeInfo({ ...employeeInfo, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form id="createEmployee" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          value={employeeInfo.firstName}
          onChange={onChange}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          value={employeeInfo.lastName}
          onChange={onChange}
        />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input
          id="date-of-birth"
          type="date"
          name="birthday"
          value={employeeInfo.birthday}
          onChange={onChange}
        />

        <label htmlFor="start-date">Start Date</label>
        <input
          id="start-date"
          type="date"
          name="startDate"
          value={employeeInfo.startDate}
          onChange={onChange}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            name="street"
            value={employeeInfo.street}
            onChange={onChange}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            value={employeeInfo.city}
            onChange={onChange}
          />
          <label htmlFor="state">State</label>
          <select name="state" id="state" onChange={onChange}>
            {States.map((state) => {
              return (
                <option value={state.abbreviation} key={state.abbreviation}>
                  {state.name}
                </option>
              );
            })}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            name="zipCode"
            value={employeeInfo.zipCode}
            onChange={onChange}
          />
        </fieldset>
        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
          value={employeeInfo.departement}
          onChange={onChange}
        >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <button type={'submit'} onClick={Reset}>
          Save
        </button>
      </form>
    </div>
  );
}
