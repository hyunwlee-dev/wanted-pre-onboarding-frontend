import { A11yHidden } from '../A11yHidden';
import { Form } from './Form';
import classes from './todoAddForm.module.css';

const TodoAddForm = ({
  className = '',
  todoId,
  onSubmit,
  todo,
  onTodoChange,
}) => {
  const combinedClassName = `${classes.todoAddForm} ${className}`.trim();
  return (
    <Form
      className={combinedClassName}
      onSubmit={onSubmit}
      legendText={'todo 입력 폼'}
    >
      <A11yHidden as='label' htmlFor={todoId}>todo</A11yHidden>
      <input type='text' id={todoId} value={todo} onChange={onTodoChange}/>
      <button type='submit'>추가</button>
    </Form>
  )
}

export { TodoAddForm };
