import React from 'react';
import { Header, Footer } from '../';
import classes from './baseLayout.module.css';

const BaseLayout = ({ className = '', children, ...restProps }) => {
  const combinedClassName = `${classes.baseLayout} ${className}`;
  return (
    <div className={combinedClassName} {...restProps}>
      <Header/>
      <main className={classes.main}>{children}</main>
      <Footer/>
    </div>
  )
}

export { BaseLayout };
