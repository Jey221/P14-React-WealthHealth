function TableauList() {
  console.log('list', localStorage.getItem('employees'));
  const mol = localStorage.getItem('employees');
  console.log(mol);
  return (
    <div>
      <table className="employeesList">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>zip Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/**mettre en place la recup des données saisie//une personne par ligne*/}
            <td>saisie du form</td>
            <td>saisie du form</td>
            <td>saisie du form</td>
            <td>saisie du form</td>
            <td>saisie du form</td>
            <td>saisie du form</td>
            <td>saisie du form</td>
            <td>saisie du form</td>
            <td>saisie du form</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableauList;
