import { A11yHidden } from '../A11yHidden';
import { Form } from './Form';
import classes from './todoAddForm.module.css';

const TodoAddForm = ({
  className = '',
  todoId,
  onCreate,
  todo,
  onTodoChange,
}) => {
  const combinedClassName = `${classes.todoAddForm} ${className}`.trim();
  return (
    <Form
      className={combinedClassName}
      onSubmit={onCreate}
      legendText={'todo 입력 폼'}
    >
      <A11yHidden as='label' htmlFor={todoId}>todo</A11yHidden>
      <input data-testid='new-todo-input' type='text' id={todoId} value={todo} onChange={onTodoChange}/>
      <button data-testid='new-todo-add-button' type='submit'>추가</button>
    </Form>
  )
}

export { TodoAddForm };
