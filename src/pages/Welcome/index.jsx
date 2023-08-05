import classes from './welcome.module.css';
import { useDocumentTitle } from '../../hooks/';
import { A11yHidden } from '../../components';

const Welcome = () => {
  useDocumentTitle('home page');
  return (
    <div className={classes.welcome}>
      <A11yHidden as='h1'>home page</A11yHidden>
      <div className={classes.text}>{"Welcome, from hyunwlee"}</div>
    </div>
  )
}

export default Welcome;
