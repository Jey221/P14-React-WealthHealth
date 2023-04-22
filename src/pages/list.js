import { Link } from 'react-router-dom';
import TableauList from '../components/List/tableau';
import { Typography } from '@mui/material';

function List(employees) {
  return (
    <div>
      <Typography variant="h2">hello</Typography>
      <TableauList employees={employees} />
      <Link to={'/'}>Home</Link>
    </div>
  );
}

export default List;
