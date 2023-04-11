import {Header } from "../header/header";
import {Footer } from "../footer/footer";
import { node, string } from "prop-types";
import {Container } from '../container/contianer';
import classes from './baseLayout.module.css';

/* Component ---------------------------------------------------------------- */

export function BaseLayout({ className, children, ...restProps }) {
  const combineClassNames = `${classes.BaseLayout} ${className}`.trim();

  return (
    <div className={combineClassNames} {...restProps}>
      <Header />
      <main className={classes.Main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}

/* Props -------------------------------------------------------------------- */

BaseLayout.defaultProps = {
  className: "",
};

BaseLayout.propTypes = {
  className: string,
  children: node,
};
