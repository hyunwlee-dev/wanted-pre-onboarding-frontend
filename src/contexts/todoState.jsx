import PropTypes from "prop-types";
import {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
} from "react";

const TodoContext = createContext();

TodoContext.displayName = "TodoContext";

export const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const todoStateValue = useMemo(
    () => ({
      todoList,
      updateTodoList: setTodoList,
    }),
    [todoList]
  );

  return (
    <TodoContext.Provider value={todoStateValue}>
      {children}
    </TodoContext.Provider>
  );
};

TodoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useTododState() {
  const todoState = useContext(TodoContext);

  if (!todoState) {
    throw new ReferenceError(
      "useTodoState 훅은 TodoState 컨텍스트 내부에서만 호출해야 합니다."
    );
  }

  return todoState;
}
