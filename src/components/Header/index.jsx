import React from 'react';
import { Nav } from '../';
import classes from './header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Nav/>
    </header>
  )
}

export { Header };
