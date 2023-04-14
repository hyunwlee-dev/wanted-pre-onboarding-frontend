import classes from "./footer.module.css";
import { Container } from "../container/contianer";

export function Footer() {
  return (
    <footer className={classes.Footer}>
      <Container className={classes.Container}>
        <small>
          COPYRIGHT ALL RESERVED. {new Date().getFullYear()} &copy; Hyunwlee
        </small>
      </Container>
    </footer>
  );
}
