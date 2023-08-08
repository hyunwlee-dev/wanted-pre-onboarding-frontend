import { useCallback, useId, useState } from "react";
import { createTodo } from "../../api";
import { Container, TodoAddForm, TodoList } from "../../components";
import { useFetch, useTodoList } from "../../hooks";
import classes from "./todoContainer.module.css";

const TodoContainer = ({...restProps}) => {
  const { todoList, setTodoList }  = useTodoList();
  const [todo, setTodo] = useState('');
  const { data, isLoading, error, fetchData } = useFetch();
  const todoId = useId();
  const onTodoChange = (e) => {setTodo(e.target.value)};
  const onCreate = useCallback(
    async (e) => {
      e.preventDefault();
      const response = await fetchData(createTodo({ todo }));
      if (response.status === 201) {
        setTodoList((prev) => [...prev, response.data]);
      }
    },
    [todo]
  );
  return (
    <Container className={classes.todoContainer} {...restProps}>
      <TodoAddForm 
        className={classes.todoAddForm}
        todoId={todoId}
        onSubmit={onCreate}
        todo={todo}
        onTodoChange={onTodoChange}
      />
      <TodoList className={classes.todoList} todoList={todoList}/>
      {!isLoading && error && <div role='alert' className={classes.error}>{error}</div>}
      {isLoading && <div role='alert' className={classes.isLoading}>loading...</div>}
    </Container>
  )
}

export { TodoContainer };
