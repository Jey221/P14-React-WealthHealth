import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import List from './pages/list';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
