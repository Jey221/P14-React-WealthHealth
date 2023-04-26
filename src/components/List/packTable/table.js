import { useState } from 'react';
import styled from 'styled-components';

// mise en forme du tableau
const TableEmployee = styled.div`
  background-color: #80808085;
  margin: auto;
  width: 900px;
  border-radius: 20px;
`;
const SearchZone = styled.div`
  background-color: #35410480;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1%;
`;
const TableList = styled.table`
  background-color: #354104;
  margin-top: 3%;
  margin: auto;
`;
const TableHead = styled.thead`
  background-color: #354104;
  color: #93ad18;
`;
const TableBody = styled.tbody`
  background-color: #b3d31da3;
`;
const IndexEmployees = styled.div`
  display: flex;
  justify-content: flex-end;
`;
function Table(employees) {
  const listEmployees = employees.employees.employees;
  // mise en place hook pour la saisie ds la barre de recherche
  const [searchField, setSearchField] = useState('');
  // création de la liste des employées filtrés
  const filteredEmployees = listEmployees.filter((employee) => {
    return (
      employee.firstName
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase()) ||
      employee.lastName
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase()) ||
      employee.departement.includes(searchField.toLocaleLowerCase()) ||
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
    console.log(e);
    setSearchField(e.target.value);
  };
  return (
    <TableEmployee>
      <SearchZone>
        <label htmlFor="searchEmployee">Search:</label>
        <input
          id="searchEmployee"
          className="searchBar"
          type="search"
          onChange={searchChange}
        />
      </SearchZone>
      <TableList>
        <TableHead>
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
        </TableHead>
        <TableBody>
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
        </TableBody>
      </TableList>
      <IndexEmployees>
        <p>
          Showing 1 to {filteredEmployees.length} of {filteredEmployees.length}
        </p>
      </IndexEmployees>
    </TableEmployee>
  );
}

export default Table;
