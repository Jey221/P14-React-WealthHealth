function TableauList(employees) {
  /*   console.log('list', localStorage.getItem('employees'));
  const mol = localStorage.getItem('employees');
  console.log(mol); */

  console.log('employees table', employees.employees.employees);
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
          {employees.employees.employees.map((employee) => (
            <tr>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.departement}</td>
              <td>{employee.birthday}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.city}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableauList;
