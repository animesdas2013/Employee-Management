import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const employeeCount = useSelector((state) => state.employee.employees.length);

  const handleAddEmployee = () => {
    navigate('/edit/new'); 
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Employee Management
        </Typography>
        <Typography variant="body1" style={{ marginRight: '20px' }}>
          Total Employees: {employeeCount}
        </Typography>
        <Button color="inherit" onClick={handleAddEmployee}>
          Add Employee
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
