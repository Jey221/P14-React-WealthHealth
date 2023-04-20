import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import List from './pages/list';
import './styles/app.css';
import { useState } from 'react';

/* TEST */

function App() {
  const [employees, updateEmployees] = useState([]);
  const addEmployee = (employeeInfo) => {
    updateEmployees([...employees, employeeInfo]);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home addEmployee={addEmployee} />} />
        <Route path="/list" element={<List employees={employees} />} />
      </Routes>
    </div>
  );
}

export default App;
