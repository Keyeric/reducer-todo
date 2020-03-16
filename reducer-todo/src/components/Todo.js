import React, { useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { todoReducer, initialState } from "../reducers/todoReducer";

const useStyles = makeStyles({
  todo: {
    display: "flex",
    flexDirection: "column",
    justfyContent: "center",
    alignItems: "center",
    background: "black",
    margin: "5rem 25rem",
    padding: "1rem 0",
    border: "0.5rem solid red",
    "& h1": {
      color: "white"
    },
    "& div": {
      // padding: "1rem 0",
      margin: "0.5rem",
      textAlign: "center"
    }
  }
});

export const Todo = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state, dispatch);
  const [newTaskName, setNewTaskName] = useState("");

  const handleChanges = e => {
    setNewTaskName(e.target.value);
  };

  return (
    <section className={classes.todo}>
      <h1> To-Do List</h1>
      <div>
        <input
          className="task-input"
          type="text"
          name="newTaskName"
          value={newTaskName}
          onChange={handleChanges}
        />
        <br />
        <button
          onClick={() => {
            dispatch({ type: "ADD_TASK", payload: newTaskName });
          }}
        >
          {" "}
          Add task
        </button>
      </div>

      <div>
        {state.tasks.map(item => {
          console.log(item);
          return (
            <div
              className={item.completed ? "ToggleComplete" : "ToggleIncomplete"}
              key={item.id}
              onClick={() => {
                dispatch({ type: "TOGGLE_COMPLETED", payload: item });
              }}
            >
              {item.item}
            </div>
          );
        })}
      </div>

      <div>
        <button
          onClick={() => {
            dispatch({ type: "REMOVE_COMPLETED" });
          }}
        >
          Clear Finished
        </button>
      </div>
    </section>
  );
};
