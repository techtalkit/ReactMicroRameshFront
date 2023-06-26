import logo from './logo.svg';
import './App.css';
import ListEmployee from './components/ListEmployee';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployee />} />
            <Route exact path="/listemployee" element={<ListEmployee />} />
            <Route exact path="/add-employee" element={<CreateEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
    </Router>

  );
}

export default App;
