function List() {
  console.log(localStorage.getItem('employees'));
  return (
    <div>
      <h1>Current Employees</h1>
    </div>
  );
}

export default List;
