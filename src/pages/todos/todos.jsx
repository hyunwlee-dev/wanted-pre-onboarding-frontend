import { useEffect, useId } from "react";
import { SearchInput } from "../../component/input/search/searchInput";
import classes from "./todos.module.css";
import { Button } from "../../component/button/button";
import { useLoaderData } from "react-router-dom";
export default function Todos() {
  const data = useLoaderData();
  const searchId = useId();
  return (
    <div className={classes.SignIn}>
      <h2 className={classes.SignInTitle}>Todo List</h2>
      <SearchInput classes={classes.SearchInput} id={searchId} />
      <Button>제출</Button>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.isCompleted}</div>
            <div>{item.todo}</div>
            <div>{item.userId}</div>
          </div>
        );
      })}
    </div>
  );
}

export async function loader({ request, params }) {
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF1dG9hdXRvQGF1dG8uY29tIiwic3ViIjoxNywiaWF0IjoxNjgxNTcwMzU3LCJleHAiOjE2ODIxNzUxNTd9.VcOcWa8mMtfzcbeNp9kZ6nYbvusdTWLU0v9TX6aVEhc",
  };
  let options = {
    method: "GET",
    headers,
  };
  const response = await fetch("http://localhost:8000/todos", options);
  if (!response.ok) {
    throw new Error({ message: "Sever Error" });
  } else {
    console.log("response", response);
  }
  return response.json();
}
