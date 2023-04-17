import { string, oneOf, bool, exact } from "prop-types";
import { useGlobalState } from "../../contexts/globalState";
import { A11yHidden } from "../a11yHidden/a11yHidden";
import classes from "./nav.module.css";
import { Link, useNavigate } from "react-router-dom";

export function Nav({ as, headline, ...restProps }) {
  const { navList: list } = useGlobalState();
  return (
    <nav className={classes.Nav} {...restProps}>
      <A11yHidden as={as}>{headline}</A11yHidden>
      <ul className={classes.UnorderedList}>
        {list.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}

function NavItem({ item }) {
  const { navList, updateNavList } = useGlobalState();
  const navigate = useNavigate();
  const _checkIsActive = (value) => {
    if (value) return classes["Active"];
    return "";
  };
  // const handleClickNavItem = (id) => {
  //   const updatedList = navList.map((list) => {
  //     if (list.id === id) return { ...list, active: true };
  //     return { ...list, active: false };
  //   });
  //   updateNavList(updatedList);
  // };

  const combineClassName = (value) => {
    return `${classes.ListItem} ${_checkIsActive(value)}`;
  };
  return (
    // <Link to={item.to} onClick={() => handleClickNavItem(item.id)}>
    <Link to={item.to}>
      <li className={combineClassName(item.active)}>{item.text}</li>
    </Link>
  );
}

NavItem.propTypes = {
  item: exact({
    id: string,
    to: string,
    text: string,
    active: bool,
  }),
};

Nav.defaultProps = {
  as: "h2",
};

Nav.propTypes = {
  as: oneOf(["h2", "h3", "h4", "h5", "h6"]),
  headline: string.isRequired,
};
