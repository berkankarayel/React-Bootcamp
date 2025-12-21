import axios from "axios";


const API_URL = "http://localhost:3000/todos";

export const getTodos = () => {
  return axios.get(API_URL);
};

export const addTodo = (newTodo) => {
  return axios.post(API_URL, newTodo);
};

export const deleteTodo = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const updateTodo = (id, updatedTodo) => {
  return axios.put(`${API_URL}/${id}`, updatedTodo);
};