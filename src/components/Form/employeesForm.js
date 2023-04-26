import { useState } from 'react';
import States from '../../data/states.json';
import { Box, Modal, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#354104',
      contrastText: '#fff',
    },
  },
});

export default function EmployeesForm({ addEmployee }) {
  // récupération des inputs via useState()
  const [employeeInfo, setEmployeeInfo] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    startDate: '',
    street: '',
    city: '',
    state: 'AL',
    zipCode: '',
    departement: 'Sales',
  });

  // envoi du formulaire dans le localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employeeInfo);
    handleOpen();
    setEmployeeInfo({
      firstName: '',
      lastName: '',
      birthday: '',
      startDate: '',
      street: '',
      city: '',
      zipCode: '',
      departement: '',
    });
  };
  // ecouteur sur la saisie
  const onChange = (e) => {
    setEmployeeInfo({ ...employeeInfo, [e.target.name]: e.target.value });
  };
  // Modal de creation d'employée
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <div>
      <form id="createEmployee" name="employeeForm" onSubmit={handleSubmit}>
        <Typography className="form">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={employeeInfo.firstName}
            onChange={onChange}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={employeeInfo.lastName}
            onChange={onChange}
            required
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            id="date-of-birth"
            type="date"
            name="birthday"
            value={employeeInfo.birthday}
            onChange={onChange}
            required
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            id="start-date"
            type="date"
            name="startDate"
            value={employeeInfo.startDate}
            onChange={onChange}
            required
          />
          <label htmlFor="departement">Department</label>
          <select
            name="departement"
            id="departement"
            value={employeeInfo.departement}
            onChange={onChange}
            required
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </Typography>

        <fieldset>
          <legend>
            <Typography variant="subtitle2">Address</Typography>
          </legend>
          <Typography className="address">
            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              name="street"
              value={employeeInfo.street}
              onChange={onChange}
              required
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              value={employeeInfo.city}
              onChange={onChange}
              required
            />
            <label htmlFor="state">State</label>
            <select name="state" id="state" onChange={onChange} required>
              {States.map((state) => {
                return (
                  <option value={state.abbreviation} key={state.abbreviation}>
                    {state.name}
                  </option>
                );
              })}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              name="zipCode"
              value={employeeInfo.zipCode}
              onChange={onChange}
              required
            />
          </Typography>
        </fieldset>
        <ThemeProvider theme={theme}>
          <Button color="neutral" variant="contained" type={'submit'}>
            Save
          </Button>
        </ThemeProvider>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
        >
          <Box sx={{ ...style, width: 400 }}>
            <Typography variant="h5">
              L'employé a été ajouté à la base !
            </Typography>
          </Box>
        </Modal>
      </form>
    </div>
  );
}
