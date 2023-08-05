import classes from './welcome.module.css';
import { useDocumentTitle } from '../../hooks/';

const Welcome = () => {
  useDocumentTitle('home page');
  return (
    <div classes={classes.welcome}>
      {"반갑습니다!!"}
    </div>
  )
}

export default Welcome;
