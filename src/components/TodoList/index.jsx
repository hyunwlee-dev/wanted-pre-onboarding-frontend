import { TodoItem } from '../';
import classes from './todoList.module.css';

const TodoList = ({
  className = '',
  todoList,
  pickedTodoIndex,
  pickTodoIndex,
  onDelete,
  onUpdate,
}) => {
  const combinedClassName = `${className} ${classes.todoList}`.trim();
  return (
    <ul className={combinedClassName}> {
      todoList?.map((todo, index) => (
        <TodoItem 
          key={todo.id}
          index={index}
          todo={todo}
          pickedTodoIndex={pickedTodoIndex}
          pickTodoIndex={pickTodoIndex}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
       ))
    }
    </ul>
  );
}

export { TodoList };
