import PropTypes from "prop-types";

import classes from "./searchInput.module.css";
import { debounce } from "../../../utils/debounce";
import { memo, useMemo } from "react";
export const SearchInput = memo(function SearchInput({
  value,
  onChange,
  id: useId,
  className,
  placeholder,
  ...restProps
}) {
  const combineClassName = `${classes.Input} ${className}`.trim();
  return (
    <input
      className={combineClassName}
      id={useId}
      placeholder={placeholder}
      type="email"
      value={value}
      onChange={(e) => debounce(onChange(e.target.value), 500)}
      {...restProps}
    />
  );
});

SearchInput.prototype = {
  id: PropTypes.string,
  className: PropTypes.string,
};
