import './App.css';
import Data from './components/Data';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Data />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
