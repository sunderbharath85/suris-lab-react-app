import React, { useEffect, useState } from "react";
import AppBar from "./components/app-bar";
import Axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import TodoList from "./components/todo-list";


function App() {
  const [loading, setLoading] = useState(true);
  const [todoData, setTodoData] = useState({});
  useEffect(() => {
    (async () => {
      const response = await Axios.get("/api/GetToDo");
      setTodoData(response.data);
      setLoading(false);
    })();
  }, [])

  return (
    <div className="app">
      <AppBar />
      <div style={{ padding: "1rem" }}>
        {loading ? <CircularProgress /> : <TodoList data={todoData} />}
      </div>
    </div>
  );
}

export default App;
