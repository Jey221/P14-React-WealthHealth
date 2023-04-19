import { useRef } from 'react';
import SelectState from './SelectState';

function EmployeesForm() {
  // récupération des inputs via useRef()
  const fNameRef = useRef();
  const lNameRef = useRef();
  const birthRef = useRef();
  const startRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();
  const deptRef = useRef();

  // envoi du formulaire dans le localStorage
  const handleSubmit = (e) => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    e.preventDefault();
    let stateRef = localStorage.getItem('state');
    // mise en place des informations des employés dans le localStorage
    const employee = {
      firstName: fNameRef.current.value,
      lastName: lNameRef.current.value,
      birthday: birthRef.current.value,
      startDate: startRef.current.value,
      street: streetRef.current.value,
      city: cityRef.current.value,
      state: stateRef,
      zipCode: zipCodeRef.current.value,
      departement: deptRef.current.value,
    };
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <div>
      <form id="createEmployee" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" ref={fNameRef} />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" ref={lNameRef} />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" ref={birthRef} />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" ref={startRef} />
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" ref={streetRef} />

          <label htmlFor="city">City</label>
          <input id="city" type="text" ref={cityRef} />

          <SelectState />

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" ref={zipCodeRef} />
        </fieldset>
        <label htmlFor="department">Department</label>
        <select name="department" id="department" ref={deptRef}>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <button type={'submit'}>Save</button>
      </form>
    </div>
  );
}

export default EmployeesForm;
