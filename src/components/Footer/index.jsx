import classes from './footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <span>Contact hyunwlee</span>
      <span>Email: hwlee3928@gmail.com</span>
      <a target='_blank' href='https://github.com/hyunwlee-dev'>github.hyunwlee-dev</a>
    </footer>
  )
}

export { Footer };
