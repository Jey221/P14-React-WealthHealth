import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

//nested data is ok, see accessorKeys in ColumnDef below
const Example = (employee) => {
  const employeeList = employee.employees.employees;
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName', //access nested data with dot notation
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'startDate', //normal accessorKey
        header: 'Start Date',
      },
      {
        accessorKey: 'departement',
        header: 'Department',
      },
      {
        accessorKey: 'birthday',
        header: 'Date of Birth',
      },
      {
        accessorKey: 'street',
        header: 'Street',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'zipCode',
        header: 'Zip Code',
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={employeeList}
      initialState={{
        showGlobalFilter: true,
      }}
      enableToolbarInternalActions={false}
      enableColumnActions={false}
      defaultColumn={{
        size: 10,
        minSize: 5,
        maxSize: 20,
      }}
      muiTablePaperProps={{
        sx: {
          maxWidth: '1050px',
          m: 'auto',
        },
      }}
    />
  );
};

export default Example;
