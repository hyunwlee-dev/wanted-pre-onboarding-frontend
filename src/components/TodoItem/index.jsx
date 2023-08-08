import { useRef } from 'react';
import { A11yHidden } from '../A11yHidden';
import classes from './TodoItem.module.css';

const TodoItem = ({ 
  todo,
  index,
  pickedTodoIndex,
  pickTodoIndex,
  onDelete,
  onUpdate
}) => {
  const pickedTodoValue = useRef(null);
  const updateTodo = async(todo) => await onUpdate(index, todo)
  const cancelPicking = () => pickTodoIndex(null);
  return (
    <>
      {pickedTodoIndex !== todo.id && 
        <li className={classes.todoItem} key={todo.id}>
          <A11yHidden as='label' htmlFor={todo.id}>todo</A11yHidden>
          <input
            className={classes.checkbox}
            type='checkbox'
            id={todo.id}
            checked={todo.isCompleted}
            onChange={() => updateTodo({ id: todo.id, todo: todo.todo, isCompleted: !todo.isCompleted })}
          />
          <span className={classes.content}>{todo.todo}</span>
          <button data-testid='modify-button' onClick={() => pickTodoIndex(todo.id)}className={classes.updateBtn}>수정</button>
          <button data-testid='delete-button' onClick={() => onDelete(todo.id)} className={classes.deleteBtn}>삭제</button>
        </li>
      }
      {pickedTodoIndex === todo.id && <li className={`${classes.todoItem} ${classes.active}`} key={todo.id}>
        <A11yHidden as='label' htmlFor={todo.id}>todo</A11yHidden>
        <input
          className={classes.checkbox}
          type='checkbox'
          id={todo.id}
          checked={todo.isCompleted}
          onChange={() => updateTodo({ id: todo.id, todo: todo.todo, isCompleted: !todo.isCompleted })}
        />
        <input data-testid='modify-input' type='text' ref={pickedTodoValue} className={classes.content} defaultValue={todo.todo}/>
        <button data-testid='submit-button' onClick={() => updateTodo({ id: todo.id, todo: pickedTodoValue?.current?.value, isCompleted: todo.isCompleted})} className={classes.updateBtn}>제출</button>
        <button data-testid='cancel-button' onClick={cancelPicking} className={classes.deleteBtn}>취소</button>
        </li>
      }
    </>
  )
}

export { TodoItem };
