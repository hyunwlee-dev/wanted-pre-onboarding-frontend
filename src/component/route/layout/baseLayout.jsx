import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";
import { Outlet } from "react-router-dom";
import { node, string } from "prop-types";
import classes from "./baseLayout.module.css";
import { Container } from "../../container/contianer";

/* Component ---------------------------------------------------------------- */

export default function BaseLayout({ className, children, ...restProps }) {
  const combineClassNames = `${classes.BaseLayout} ${className}`.trim();

  return (
    <div className={combineClassNames} {...restProps}>
      <Header />
      <main className={classes.Main}>
        <Container className={classes.Container}>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

BaseLayout.defaultProps = {
  className: "",
};

BaseLayout.propTypes = {
  className: string,
  children: node,
};
