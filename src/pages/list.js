import { Link } from 'react-router-dom';
import TableauList from '../components/List/tableau';

function List(employees) {
  console.log('employees list', employees);
  return (
    <div>
      <h1>Current Employees</h1>
      <TableauList employees={employees} />
      <Link to={'/'}>Home</Link>
    </div>
  );
}

export default List;
