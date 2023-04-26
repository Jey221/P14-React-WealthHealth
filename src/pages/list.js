import Table from '../components/List/packTable/table';
// import TableauList from '../components/List/tableau';

function List(employees) {
  return (
    <div className="List">
      {/* <TableauList employees={employees} /> */}
      <Table employees={employees} />
    </div>
  );
}

export default List;
