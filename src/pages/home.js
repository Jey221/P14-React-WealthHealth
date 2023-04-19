import { Link } from 'react-router-dom';
import EmployeesForm from '../components/Form/employeesForm';

function Home() {
  return (
    <div>
      <h1>HRnet</h1>
      <Link to={'/list'}>View Current Employees</Link>
      <h2>Create Employee</h2>
      <EmployeesForm />
    </div>
  );
}

export default Home;
