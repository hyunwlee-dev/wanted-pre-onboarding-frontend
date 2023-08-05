import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../';
import classes from './baseLayout.module.css';

const BaseLayout = ({ className = '', ...restProps }) => {
  const combinedClassName = `${classes.baseLayout} ${className}`;
  return (
    <div className={combinedClassName} {...restProps}>
      <Header/>
      <main className={classes.main}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export { BaseLayout };
