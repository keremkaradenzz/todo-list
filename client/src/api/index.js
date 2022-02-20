import axios from 'axios';

const apiEndpoint = "https://todo-backend-gtr.herokuapp.com/todos/";

export const fetchTodo = async () => await axios.get(apiEndpoint);

export const createTodo = async (data) => await axios.post(apiEndpoint, data);

export const updateTodo = async (id, data) => await axios.patch(`${apiEndpoint}/${id}`, data);

export const deleteTodo = async (id) => await axios.delete(`${apiEndpoint}/${id}`);

export const getByIdTodo = async (id) => await axios.get(`${apiEndpoint}/${id}`);