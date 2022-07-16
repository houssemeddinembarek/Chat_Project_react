import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import Dashboard from './dashboard/dashboard'
import LoginPage from './authPages/loginPage/loginPage';
import RegisterPage from './authPages/registerPage/registerPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path='/dashboard' element={<Dashboard/>} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
