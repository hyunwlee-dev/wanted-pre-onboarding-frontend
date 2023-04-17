import { useCallback, useEffect, useId, useRef, useState } from "react";
import { SearchInput } from "../../component/input/search/searchInput";
import classes from "./todos.module.css";
import { Button } from "../../component/button/button";
import { useLoaderData } from "react-router-dom";
import { A11yHidden } from "../../component/a11yHidden/a11yHidden";
import { Label } from "../../component/label/label";
import { useFetch } from "../../hooks/useFetch";
import { CheckboxInput } from "../../component/input/checkbox/checkboxInput";
export default function Todos() {
  const searchId = useId();
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [willModifyItemIdx, setWillModifyItemIdx] = useState(null);
  const modifyValue = useRef();
  let Authorization = localStorage.getItem("access_token");
  Authorization =
    "Bearer " + Authorization.substring(1, Authorization.length - 1);

  const handleSearchInput = (value) => {
    setTodo(value);
  };

  const handleSubmit = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization,
    };
    let options = {
      method: "POST",
      headers,
      body: JSON.stringify({
        todo: todo,
      }),
    };
    const response = await fetch(
      "https://www.pre-onboarding-selection-task.shop/todos",
      options
    );
    setTodo("");
  };

  const getTodoList = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization,
    };
    let options = {
      method: "GET",
      headers,
    };
    const response = await fetch(
      "https://www.pre-onboarding-selection-task.shop/todos",
      options
    );
    if (!response.ok) {
      throw new Error({ message: "Sever Error" });
    }
    const result = await response.json();
    setTodoList(result);
  };

  const handleCheckbox = async (item, idx) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization,
    };
    let options = {
      method: "PUT",
      headers,
      body: JSON.stringify({
        todo: item.todo,
        isCompleted: !item.isCompleted,
      }),
    };
    const response = await fetch(
      `https://www.pre-onboarding-selection-task.shop/todos/${item.id}`,
      options
    );
    await getTodoList();
  };

  const handleBtnModify = async (item, idx) => {
    setWillModifyItemIdx(idx);
    if (willModifyItemIdx === idx) {
      await handleModfiy(item);
      setWillModifyItemIdx(null);
    }
  };

  const handleModfiy = async (item) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization,
    };
    let options = {
      method: "PUT",
      headers,
      body: JSON.stringify({
        todo: modifyValue.current,
        isCompleted: item.isCompleted,
      }),
    };
    const response = await fetch(
      `https://www.pre-onboarding-selection-task.shop/todos/${item.id}`,
      options
    );
    await getTodoList();
  };

  const handleBtnDelete = async (item) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization,
    };
    let options = {
      method: "DELETE",
      headers,
    };
    const response = await fetch(
      `https://www.pre-onboarding-selection-task.shop/todos/${item.id}`,
      options
    );
    getTodoList();
  };

  const checkNeedModifyInput = (item, idx) => {
    if (willModifyItemIdx !== idx) return item.todo;
    return <input type="text" onChange={(e) => handleModifyValue(e)} />;
  };

  const checkNeedSubmitButton = (idx) => {
    if (willModifyItemIdx !== idx) return "수정";
    return "제출";
  };

  const handleModifyValue = (e) => {
    e.preventDefault();
    modifyValue.current = e.target.value;
  };

  useEffect(() => {
    getTodoList();
  }, [todo]);

  return (
    <div className={classes.SignIn}>
      <h2 className={classes.SignInTitle}>Todo List</h2>
      <Label invisibleLabel htmlFor={searchId}>
        검색
      </Label>
      <SearchInput
        classes={classes.SearchInput}
        id={searchId}
        value={todo}
        onChange={handleSearchInput}
      />
      <Button onClick={handleSubmit}>제출</Button>
      <ul>
        {todoList.map((item, idx) => {
          return (
            <li key={item.id}>
              <CheckboxInput
                checked={item.isCompleted}
                onChange={() => handleCheckbox(item, idx)}
              />
              <span>{checkNeedModifyInput(item, idx)}</span>
              <Button
                data-testid="modify-button"
                onClick={() => handleBtnModify(item, idx)}
              >
                {checkNeedSubmitButton(idx)}
              </Button>
              <Button
                data-testid="delete-button"
                onClick={() => handleBtnDelete(item)}
              >
                삭제
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// export async function loader({ request, params }) {
//   const headers = {
//     "Content-Type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF1dG9hdXRvQGF1dG8uY29tIiwic3ViIjoxNywiaWF0IjoxNjgxNTcwMzU3LCJleHAiOjE2ODIxNzUxNTd9.VcOcWa8mMtfzcbeNp9kZ6nYbvusdTWLU0v9TX6aVEhc",
//   };
//   let options = {
//     method: "GET",
//     headers,
//   };
//   const response = await fetch("https://www.pre-onboarding-selection-task.shop/todos", options);
//   if (!response.ok) {
//     throw new Error({ message: "Sever Error" });
//   } else {
//     console.log("response", response);
//   }
//   return response.json();
// }
