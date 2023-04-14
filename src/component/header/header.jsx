import React from "react";
import PropTypes from "prop-types";

import { Button } from "../button/button";
import classes from "./header.module.css";
import { Nav } from "../nav/nav";

// export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
export function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderWrapper}>
        {/* {user ? (
            <>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : ( */}
      </div>
      <Nav headline="내비게이션 제목" />
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  // onLogin: PropTypes.func.isRequired,
  // onLogout: PropTypes.func.isRequired,
  // onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
