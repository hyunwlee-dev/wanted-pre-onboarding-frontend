import classes from './welcome.module.css';
import { useDocumentTitle } from '../../hooks/';
import { A11yHidden } from '../../components';

const Welcome = () => {
  useDocumentTitle('home page');
  return (
    <div classes={classes.welcome}>
      <A11yHidden as='h1'>home page</A11yHidden>
      {"반갑습니다!!"}
    </div>
  )
}

export default Welcome;
