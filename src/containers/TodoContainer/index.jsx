import { useCallback, useId, useState } from "react";
import { createTodo, deleteTodo, updateTodo } from "../../api";
import { Container, TodoAddForm, TodoList } from "../../components";
import { useFetch, useTodoList } from "../../hooks";
import classes from "./todoContainer.module.css";

const TodoContainer = ({...restProps}) => {
  const { todoList, setTodoList }  = useTodoList();
  const [todo, setTodo] = useState('');
  const { isLoading, error, fetchData } = useFetch();
  const todoId = useId();
  const [pickedTodoIndex, setPickedTodoIndex] = useState(null);
  const pickTodoIndex = (id) => {setPickedTodoIndex(id)}
  const onTodoChange = (e) => {setTodo(e.target.value)};
  const onCreate = useCallback(
    async (e) => {
      e.preventDefault();
      const response = await fetchData(createTodo({ todo }));
      if (response.status === 201) {
        setTodo('');
        setTodoList((prev) => [...prev, response.data]);
      }
    },
    [todo, fetchData, setTodoList]
  );
  const onUpdate = useCallback(
    async (index, payload) => {
      const response = await fetchData(updateTodo(payload.id, payload));
      if (response.status === 200) {
        setTodoList((prev) => {
          return [...prev.slice(0, index), payload, ...prev.slice(index + 1)];
        });
        pickTodoIndex(null);
      }
    },
    [fetchData, setTodoList]
  );
  const onDelete = useCallback(
    async(id) => {
      const response = await fetchData(deleteTodo(id));
      if (response.status === 204) {
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
      }
    },
    [fetchData, setTodoList]
  );
  return (
    <Container className={classes.todoContainer} {...restProps}>
      <TodoAddForm 
        className={classes.todoAddForm}
        todoId={todoId}
        onCreate={onCreate}
        todo={todo}
        onTodoChange={onTodoChange}
      />
      <TodoList 
        className={classes.todoList}
        todoList={todoList}
        pickedTodoIndex={pickedTodoIndex}
        pickTodoIndex={pickTodoIndex}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
      {!isLoading && error && <div role='alert' className={classes.error}>{error}</div>}
      {isLoading && <div role='alert' className={classes.isLoading}>loading...</div>}
    </Container>
  )
}

export { TodoContainer };
