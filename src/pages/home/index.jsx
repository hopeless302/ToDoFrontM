import { useEffect, useState } from "react";
import { TODOForm, TODOHero, TODOList } from "../../components";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);

  // Retrieve data from localStorage when component mounts
  // useEffect(() => {
  //   const storedTodos = localStorage.getItem("todos");
  //   if (storedTodos) {
  //     setTodos(JSON.parse(storedTodos));
  //   }
  // }, []);

  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/todo");
      console.log("Todos:", response.data.message);
      return response.data.message;
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const completed = todos.filter((todo) => todo.is_completed === true).length;
  const total = todos.length;

  return (
    <>
      <TODOHero completed={completed} total={total} />
      <TODOForm todos={todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Home;
