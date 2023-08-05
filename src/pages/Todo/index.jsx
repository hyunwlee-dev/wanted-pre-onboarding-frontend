import { useDocumentTitle } from '../../hooks';
import classes from './todo.module.css';

const Todo = () => {
  useDocumentTitle('todo page');
  return (
    <div className={classes.todo}>
      오늘의 할일
    </div>
  )
}

export default Todo;
