import classes from './footer.module.css';
import { Container } from '../container/contianer';
import { useRef } from 'react';

/* Component ---------------------------------------------------------------- */

export function Footer() {
  const emailRef = useRef(null);

  return (
    <footer className={classes.Footer}>
      <Container>
        <small>
          COPYRIGHT ALL RESERVED. {new Date().getFullYear()} &copy; EUID
        </small>
      </Container>
    </footer>
  );
}
