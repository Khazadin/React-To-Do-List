import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const listMaker = () => {
    setList([...list, task]);
  };
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const deleteItem = (taskname) => {
    const newToDo = list.filter((tasky) => {
      if (tasky === taskname) {
        return false;
      } else {
        return true;
      }
    });
    setList(newToDo);
  };
  return (
    <div className="App">
      <h1>First React Project of Me</h1>
      <h2>ToDo List</h2>
      <div className="inpBut">
        <input
          className="inputBar"
          type="text"
          placeholder="What is your task?"
          onChange={handleChange}
        ></input>
        <button className="buttonImp" onClick={listMaker}>
          Add task
        </button>
      </div>
      <div className="noteBook">
        {list.map((tasky) => {
          return (
            <div className="taskBlock">
              <div className="taskChild ">
                <h3 style={{ marginRight: "20px" }}>{tasky}</h3>
                <button
                  className="finishButton"
                  onClick={() => deleteItem(tasky)}
                >
                  Finished
                </button>
              </div>
              <hr></hr>
            </div>
          );
        })}
      </div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
      </style>
    </div>
  );
}

export default App;
