import { axiosAuthInstance } from "../utils"

const getTodos = async() => {
  try {
    const response = await axiosAuthInstance.get('/todos');
    return response;
  } catch(error) {
    return error;
  }
}

const createTodo = async(payload) => {
  try {
    const response = await axiosAuthInstance.post('/todos', payload);
    return response;
  } catch(error) {
    return error;
  }
}

const updateTodo = async(id, payload) => {
  try {
    const response = await axiosAuthInstance.put(`/todos/${id}`, payload);
    return response;
  } catch(error) {
    return error;
  }
}

const deleteTodo = async(id) => {
  try {
    const response = await axiosAuthInstance.delete(`/todos/${id}`);
    return response;
  } catch(error) {
    return error;
  }
}

export { getTodos, createTodo, updateTodo, deleteTodo };
