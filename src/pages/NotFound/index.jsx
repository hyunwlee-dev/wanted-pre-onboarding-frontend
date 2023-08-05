import { A11yHidden } from '../../components';
import { useDocumentTitle } from '../../hooks';
import classes from './notFound.module.css';

const NotFound = () => {
  useDocumentTitle('404 error page');
  return (
    <div className={classes.notFound}>
      <A11yHidden as='h1'>404 errorp page</A11yHidden>
      404 Error Page
    </div>
  )
}

export default NotFound;
