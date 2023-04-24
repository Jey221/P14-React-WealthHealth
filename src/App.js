import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import List from './pages/list';
import './styles/app.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [employees, updateEmployees] = useState([]);
  const addEmployee = (employeeInfo) => {
    updateEmployees([...employees, employeeInfo]);
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home addEmployee={addEmployee} />} />
        <Route path="/list" element={<List employees={employees} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
