import TableauList from '../components/List/tableau';

function List(employees) {
  return (
    <div className="List">
      <TableauList employees={employees} />
    </div>
  );
}

export default List;
