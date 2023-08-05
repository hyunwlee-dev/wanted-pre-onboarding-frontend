import { A11yHidden } from '../../components';
import { useDocumentTitle } from '../../hooks';
import classes from './todo.module.css';

const Todo = () => {
  useDocumentTitle('todo page');
  return (
    <div className={classes.todo}>
      <A11yHidden as='h1'>todo page</A11yHidden>
      오늘의 할일
    </div>
  )
}

export default Todo;
