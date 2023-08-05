import classes from './container.module.css';

const Container = ({ className = '', children }) => {
  const combinedClassName = `${classes.container} ${className}`.trim();
  return (
    <div className={combinedClassName}>
      {children}
    </div>
  )
}

export { Container };
