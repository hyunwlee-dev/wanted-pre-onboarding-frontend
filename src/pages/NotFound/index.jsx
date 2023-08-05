import { useDocumentTitle } from '../../hooks';
import classes from './notFound.module.css';

const NotFound = () => {
  useDocumentTitle('404 error page');
  return (
    <div className={classes.notFound}>
      404 Error Page
    </div>
  )
}

export default NotFound;
