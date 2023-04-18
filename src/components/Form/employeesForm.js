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
    e.preventDefault();
    console.log(deptRef.current.value);
    localStorage.setItem('firstName', fNameRef.current.value);
    localStorage.setItem('lastName', lNameRef.current.value);
    localStorage.setItem('birthday', birthRef.current.value);
    localStorage.setItem('startDate', startRef.current.value);
    localStorage.setItem('street', streetRef.current.value);
    localStorage.setItem('city', cityRef.current.value);
    localStorage.setItem('zip-code', zipCodeRef.current.value);
    localStorage.setItem('departement', deptRef.current.value);
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
          {/* <label htmlFor="state">State</label>
          <select name="state" id="state"></select> */}

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
