import { useState } from 'react';
import styled from 'styled-components';

// mise en forme du tableau
const TableEmployee = styled.div`
  background-color: #80808085;
  margin: auto;
  min-width: 925px;
  max-width: 1062px;
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
  margin: auto;
  margin-top: 3%;
`;
const TableHead = styled.thead`
  background-color: #354104;
  color: #93ad18;
`;
const Headers = styled.th`
  align-items: center;
`;
const HeadersZone = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icons = styled.span`
  display: flex;
  flex-direction: column;
  margin: 0% 3%;
`;
const TableBody = styled.tbody`
  background-color: #b3d31da3;
`;
const IndexEmployees = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 3%;
`;

// Mise en place du tableau et des fonctionnalités liées (Recherche, Tri, Pagination)
function Table(employees) {
  // récupération des datas
  const listEmployees = employees.employees.employees;

  // mise en place hook pour la saisie ds la barre de recherche
  const [searchField, setSearchField] = useState('');

  // création de la liste des employés filtrés
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
    setSearchField(e.target.value);
  };

  //mise en place d'un hook pour configurer le tri
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });

  // écouteur sur entête de colonne et définition des directions de tri
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // fonction pour modifier le sens de l'indicateur de tri
  const getIconClass = (headerKey) => {
    if (sortConfig.key === headerKey) {
      return sortConfig.direction === 'ascending'
        ? 'fa-sort-up'
        : 'fa-sort-down';
    }
    return 'hidden';
  };

  //fonction de tri selon entête de colonne
  const sortedData = () => {
    let sortedData = [...filteredEmployees];
    if (sortConfig !== null) {
      sortedData.sort((a, b) => {
        if (
          typeof a[sortConfig.key] === 'string' &&
          typeof b[sortConfig.key] === 'string'
        ) {
          return sortConfig.direction === 'ascending'
            ? a[sortConfig.key].localeCompare(b[sortConfig.key])
            : b[sortConfig.key].localeCompare(a[sortConfig.key]);
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        return 0;
      });
    }
    return sortedData;
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
            <Headers onClick={() => handleSort('firstName')}>
              <HeadersZone>
                First Name
                <Icons>
                  <i className={`fa-solid ${getIconClass('firstName')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('lastName')}>
              <HeadersZone>
                Last Name
                <Icons>
                  <i className={`fa-solid ${getIconClass('lastName')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('startDate')}>
              <HeadersZone>
                Start Date
                <Icons>
                  <i className={`fa-solid ${getIconClass('startDate')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('departement')}>
              <HeadersZone>
                Departement{' '}
                <Icons>
                  <i className={`fa-solid ${getIconClass('departement')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('birthday')}>
              <HeadersZone>
                Date of Birth{' '}
                <Icons>
                  <i className={`fa-solid ${getIconClass('birthday')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('street')}>
              <HeadersZone>
                Street{' '}
                <Icons>
                  <i className={`fa-solid ${getIconClass('street')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('city')}>
              <HeadersZone>
                City{' '}
                <Icons>
                  <i className={`fa-solid ${getIconClass('city')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('state')}>
              <HeadersZone>
                State{' '}
                <Icons>
                  <i className={`fa-solid ${getIconClass('state')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('zipCode')}>
              <HeadersZone>
                zip Code{' '}
                <Icons>
                  <i className={`fa-solid ${getIconClass('zipCode')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
          </tr>
        </TableHead>
        <TableBody id="tableContent">
          {sortedData().map((employee) => (
            <tr className="employeeList" key={employee.firstName}>
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

/* module.exports = {
  EmployeesList: Table,
};
 */
