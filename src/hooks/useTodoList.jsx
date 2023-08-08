import { useCallback, useEffect, useState } from "react";
import { getTodos } from "../api";

const useTodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = useCallback(async () => {
    const todos = await getTodos();
    setTodoList(todos.data);
  }, []);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return { todoList, setTodoList };
};

export { useTodoList };
