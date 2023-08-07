import { useDocumentTitle, useLoginRedirect } from '../../hooks';
import classes from './todo.module.css';

const Todo = () => {
  useLoginRedirect();
  useDocumentTitle('todo page');
  return (
    <div className={classes.todo}>
      <h1>todo page</h1>
    </div>
  )
}

export default Todo;
