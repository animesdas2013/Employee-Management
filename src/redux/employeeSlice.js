import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../api/employeeAPI';

// Thunks
export const fetchEmployees = createAsyncThunk('employee/fetchEmployees', async () => {
  const response = await getEmployees();
  return response.data;
});

export const addEmployee = createAsyncThunk('employee/addEmployee', async (data) => {
  const response = await createEmployee(data);
  return response.data;
});

export const modifyEmployee = createAsyncThunk('employee/modifyEmployee', async ({ id, data }) => {
  const response = await updateEmployee(id, data);
  return response.data;
});

export const removeEmployee = createAsyncThunk('employee/removeEmployee', async (id) => {
  await deleteEmployee(id);
  return id; 
});

const initialState = {
  employees: [],  
  loading: false,
  error: null
};


const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees = action.payload;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      })
      .addCase(modifyEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex((emp) => emp.id === action.payload.id);
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
      })
      .addCase(removeEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter((emp) => emp.id !== action.payload);
      });
  },
});

export default employeeSlice.reducer;
