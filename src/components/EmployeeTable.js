import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, removeEmployee } from "../redux/employeeSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

const EmployeeTable = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees || []); // Ensure employees defaults to an empty array

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeEmployee(id));
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(employees) && employees.length > 0 ? (
            employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>No employees found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
