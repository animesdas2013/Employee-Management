import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeTable from './components/EmployeeTable';
import EditEmployeeForm from './components/EditEmployeeForm';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<EmployeeTable />} />
      <Route path="/edit/:id" element={<EditEmployeeForm />} />
      <Route path="/edit/new" element={<EditEmployeeForm />} /> {/* Route for adding new employees */}
    </Routes>
  </Router>
);

export default App;

