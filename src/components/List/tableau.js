import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

const TableauList = (employee) => {
  const employeeList = employee.employees.employees;

  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'startDate',
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
      muiTableBodyRowProps={{
        hover: false,
        sx: {
          backgroundColor: 'rgba(147, 173, 24,0.77)',
          borderRight: '1px solid rgba(255, 255, 255)',
        },
      }}
      muiTableHeadCellProps={{
        sx: (theme) => ({
          background: 'rgba(90, 111, 8,0.77)',
          borderRight: '1px solid rgba(224,224,224,1)',
          color: theme.palette.text.primary,
        }),
      }}
      enableToolbarInternalActions={false}
      enableColumnActions={false}
      defaultColumn={{
        size: 10,
        minSize: 5,
        maxSize: 15,
      }}
      muiTablePaperProps={{
        sx: {
          maxWidth: '1050px',
          m: 'auto',
          borderRadius: '20px',
        },
      }}
    />
  );
};

export default TableauList;
