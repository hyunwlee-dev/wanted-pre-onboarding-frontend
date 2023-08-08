import classes from './todoList.module.css';

const TodoList = ({ className = '', todoList }) => {
  const combinedClassName = `${className} ${classes.todoList}`.trim();
  return (
    <ul className={combinedClassName}>
    {
      todoList?.map(item => (
        <li className={classes.li} key={item.id}>{item.todo}</li>
      ))
    }
    </ul>
  );
}

export { TodoList };
