import axios from 'axios';

const API_BASE_URL = 'https://interviewtesting.onrender.com/v1/users';

export const getEmployees = () => axios.get(`${API_BASE_URL}/employee/list`);
export const createEmployee = (data) => axios.post(`${API_BASE_URL}/employee/create`, data);
export const updateEmployee = (id, data) => axios.put(`${API_BASE_URL}/employee-update/${id}`, data);
export const deleteEmployee = (id) => axios.delete(`${API_BASE_URL}/employee-remove/${id}`);
