import { Link } from 'react-router-dom';
import TableauList from '../components/List/tableau';

function List(employees) {
  console.log(employees);
  return (
    <div>
      <h1>Current Employees</h1>
      <TableauList employees={employees} />
      <div>
        <p>
          Showing 1 to {employees.employees.length} of{' '}
          {employees.employees.length}
        </p>
      </div>
      <Link to={'/'}>Home</Link>
    </div>
  );
}

export default List;
