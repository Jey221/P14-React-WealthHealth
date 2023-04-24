import { Typography } from '@mui/material';
import EmployeesForm from '../components/Form/employeesForm';

function Home({ addEmployee }) {
  return (
    <div className="formulaire">
      <Typography variant="h5">Create Employee</Typography>
      <EmployeesForm addEmployee={addEmployee} />
    </div>
  );
}

export default Home;
