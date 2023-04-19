import { Link } from 'react-router-dom';
import TableauList from '../components/List/tableau';

function List() {
  console.log(localStorage.getItem('employees'));
  return (
    <div>
      <h1>Current Employees</h1>
      <TableauList />
      <Link to={'/'}>Home</Link>
    </div>
  );
}

export default List;
