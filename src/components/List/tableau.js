import { useState } from 'react';

function TableauList(employees) {
  // mise en place hook pour la saisie ds la barre de recherche
  const [searchField, setSearchField] = useState('');
  // création de la liste des employées filtrés
  const filteredEmployees = employees.employees.employees.filter((employee) => {
    return (
      employee.firstName
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase()) ||
      employee.lastName
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase()) ||
      employee.departement
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase()) ||
      employee.city.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
      employee.state.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
      employee.street.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
      employee.startDate.includes(searchField.toLocaleLowerCase()) ||
      employee.birthday.includes(searchField.toLocaleLowerCase()) ||
      employee.zipCode.includes(searchField.toLocaleLowerCase())
    );
  });
  //écouteur sur la barre de saisie
  const searchChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div>
      <div>
        <p>Search:</p>
      </div>
      <div>
        <input className="searchBar" type="search" onChange={searchChange} />
      </div>
      <table className="employeesList">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Departement</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>zip Code</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr className="employeeList" key={employee.lastName}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.departement}</td>
              <td>{employee.birthday}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="indexEmployees">
        <p>
          Showing 1 to {filteredEmployees.length} of {filteredEmployees.length}
        </p>
      </div>
    </div>
  );
}

export default TableauList;
