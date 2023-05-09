import { useState } from 'react';
import styled from 'styled-components';

// MISE EN FORME
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
  padding: 1%;
`;
const HeadersZone = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconsDefault = styled.span`
  display: flex;
  flex-direction: column;
`;
const Icons = styled.span`
  display: flex;
  flex-direction: column;
  margin: 0% 3%;
`;
const TableBody = styled.tbody`
  background-color: #b3d31da3;
`;
const IndexZone = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const NavZone = styled.nav``;
const SelectZone = styled.div`
  display: flex;
`;
const SelectEntrie = styled.select`
  height: 23px;
  margin: auto;
`;
const IndexEmployees = styled.p`
  display: flex;
  justify-content: flex-end;
  padding: 0 3%;
`;

// Mise en place du tableau et des fonctionnalités liées (Recherche, Tri, Pagination)
function Table(employees) {
  // récupération des datas
  const listEmployees = employees.employees.employees;

  /*********************************RECHERCHE**********************************************/
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

  /*********************************TRI**********************************************/
  //mise en place d'un hook pour configurer le tri
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });
  // écouteur sur entête de colonne et définition des directions de tri
  const handleSort = (key) => {
    console.log();
    const iconDefault = document.getElementById(`${key}IconDefault`);
    iconDefault.style.display = 'none';

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

  /*********************************PAGINATION**********************************************/
  //mise en place de la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowPerPage] = useState(5);

  //calcul du nombre de page
  const pages = [];
  for (let i = 1; i <= Math.ceil(sortedData().length / rowsPerPage); i++) {
    pages.push(i);
  }

  //mise en place des limites
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  //création d'un array de la liste actuel
  const currentRow = sortedData().slice(indexOfFirstRow, indexOfLastRow);

  //fonction pour choix de la page affiché
  const handlePage = (e) => {
    setCurrentPage(Number(e.target.value));
  };

  //fonction pour choix du nombre d'entrés affichés
  const handleShow = (e) => {
    setRowPerPage(e.target.value);
  };
  //fonction page suivante
  const handleNextbtn = () => {
    if (currentPage === pages.length) {
      return null;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  //fonction page précédente
  const handlePrevbtn = () => {
    if (currentPage === 1) {
      return null;
    } else {
      setCurrentPage(currentPage - 1);
    }
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
                  <IconsDefault id="firstNameIconDefault">
                    <i className={`fa-solid fa-sort-up`} />
                    <i className={`fa-solid fa-sort-down`} />
                  </IconsDefault>
                  <i className={`fa-solid ${getIconClass('firstName')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('lastName')}>
              <HeadersZone>
                Last Name
                <Icons>
                  <IconsDefault id="lastNameIconDefault">
                    <i className={`fa-solid fa-sort-up`} />
                    <i className={`fa-solid fa-sort-down`} />
                  </IconsDefault>

                  <i className={`fa-solid ${getIconClass('lastName')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('startDate')}>
              <HeadersZone>
                Start Date
                <Icons>
                  <IconsDefault id="startDateIconDefault">
                    <i className={`fa-solid fa-sort-up`} />
                    <i className={`fa-solid fa-sort-down`} />
                  </IconsDefault>

                  <i className={`fa-solid ${getIconClass('startDate')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('departement')}>
              <HeadersZone>
                Departement{' '}
                <Icons>
                  <IconsDefault id="departementIconDefault">
                    <i className={`fa-solid fa-sort-up`} />
                    <i className={`fa-solid fa-sort-down`} />
                  </IconsDefault>

                  <i className={`fa-solid ${getIconClass('departement')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('birthday')}>
              <HeadersZone>
                Date of Birth{' '}
                <Icons>
                  <IconsDefault id="birthdayIconDefault">
                    <i className={`fa-solid fa-sort-up`} />
                    <i className={`fa-solid fa-sort-down`} />
                  </IconsDefault>

                  <i className={`fa-solid ${getIconClass('birthday')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('street')}>
              <HeadersZone>
                Street{' '}
                <Icons>
                  <IconsDefault id="streetIconDefault">
                    <i className={`fa-solid fa-sort-up`} />
                    <i className={`fa-solid fa-sort-down`} />
                  </IconsDefault>

                  <i className={`fa-solid ${getIconClass('street')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('city')}>
              <HeadersZone>
                City{' '}
                <Icons>
                  <IconsDefault id="cityIconDefault">
                    <i className={`fa-solid fa-sort-up`} />
                    <i className={`fa-solid fa-sort-down`} />
                  </IconsDefault>

                  <i className={`fa-solid ${getIconClass('city')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('state')}>
              <HeadersZone>
                State{' '}
                <Icons>
                  <IconsDefault id="stateIconDefault">
                    <i className={`fa-solid fa-sort-up`} />
                    <i className={`fa-solid fa-sort-down`} />
                  </IconsDefault>

                  <i className={`fa-solid ${getIconClass('state')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
            <Headers onClick={() => handleSort('zipCode')}>
              <HeadersZone>
                zip Code{' '}
                <Icons>
                  <IconsDefault id="zipCodeIconDefault">
                    <i className={`fa-solid fa-sort-up`} />
                    <i className={`fa-solid fa-sort-down`} />
                  </IconsDefault>
                  <i className={`fa-solid ${getIconClass('zipCode')}`} />
                </Icons>
              </HeadersZone>
            </Headers>
          </tr>
        </TableHead>
        <TableBody id="tableContent">
          {currentRow.map((employee) => (
            <tr className="employeeList" key={employee.lastName}>
              <td style={{ padding: '1%' }}>{employee.firstName}</td>
              <td style={{ padding: '1%' }}>{employee.lastName}</td>
              <td style={{ padding: '1%' }}>{employee.startDate}</td>
              <td style={{ padding: '1%' }}>{employee.departement}</td>
              <td style={{ padding: '1%' }}>{employee.birthday}</td>
              <td style={{ padding: '1%' }}>{employee.street}</td>
              <td>{employee.city}</td>
              <td style={{ padding: '1%' }}>{employee.state}</td>
              <td style={{ padding: '1%' }}>{employee.zipCode}</td>
            </tr>
          ))}
        </TableBody>
      </TableList>
      <IndexZone>
        <SelectZone>
          <p>Show: </p>
          <SelectEntrie
            name="selectEntrie"
            id="selectEntrie"
            onChange={handleShow}
          >
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
          </SelectEntrie>
          <p> entries</p>
        </SelectZone>
        <NavZone>
          <button onClick={handlePrevbtn}>prev</button>
          <select
            name="indexPage"
            id="indexPage"
            onChange={(e) => handlePage(e)}
            value={currentPage}
          >
            {pages.map((page) => {
              return (
                <option value={page} key={page}>
                  {page}
                </option>
              );
            })}
          </select>
          <button onClick={handleNextbtn}>next</button>
        </NavZone>

        <IndexEmployees>
          Showing 1 to {rowsPerPage} of {filteredEmployees.length}
        </IndexEmployees>
      </IndexZone>
    </TableEmployee>
  );
}

export default Table;

/* module.exports = {
  EmployeesList: Table,
};
 */
