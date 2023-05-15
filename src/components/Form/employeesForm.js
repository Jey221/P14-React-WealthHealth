import { useState } from 'react';
import States from '../../data/states.json';
import { Box, Modal, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';

//mise en formes
const theme = createTheme({
  palette: {
    neutral: {
      main: '#354104',
      contrastText: '#fff',
    },
  },
});

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

export default function EmployeesForm({ addEmployee }) {
  /*// récupération des inputs via useState()
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
 */
  /*   const [employeeInfo, setEmployeeInfo] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    departement: '',
  });
 */
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    // setEmployeeInfo(data);
    handleOpen();
    addEmployee(data);
    document.forms['employeeForm'].reset();
  }

  // Modal de creation d'employée ok
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <form
        id="createEmployee"
        name="employeeForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography className="form">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            {...register('firstName', { required: true, minLength: 2 })}
          />
          {errors.firstName && (
            <p className="errorMessage">Firstname is required</p>
          )}

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            {...register('lastName', { required: true, minLength: 2 })}
          />
          {errors.lastName && (
            <p className="errorMessage">Lastname is required</p>
          )}

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            id="date-of-birth"
            type="date"
            name="birthday"
            {...register('birthday', { required: true })}
          />
          {errors.birthday && (
            <p className="errorMessage">Date of birth is required</p>
          )}

          <label htmlFor="start-date">Start Date</label>
          <input
            id="start-date"
            type="date"
            name="startDate"
            {...register('startDate', { required: true })}
          />
          {errors.startDate && (
            <p className="errorMessage">Start date is required</p>
          )}
          <label htmlFor="departement">Department</label>
          <select
            name="departement"
            id="departement"
            {...register('departement', { required: true })}
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          {errors.departement && (
            <p className="errorMessage">Departement is required</p>
          )}
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
              {...register('street', { required: true })}
            />
            {errors.street && (
              <p className="errorMessage">Street is required</p>
            )}
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              {...register('city', { required: true, minLength: 2 })}
            />
            {errors.city && (
              <p className="errorMessage">City date is required</p>
            )}

            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              {...register('state', { required: true })}
            >
              {States.map((state) => {
                return (
                  <option value={state.abbreviation} key={state.abbreviation}>
                    {state.name}
                  </option>
                );
              })}
            </select>
            {errors.state && <p className="errorMessage">State is required</p>}

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              name="zipCode"
              {...register('zipCode', { required: true })}
            />
            {errors.zipCode && (
              <p className="errorMessage">Zip Code is required</p>
            )}
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
