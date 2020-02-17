import React, { useState, useReducer } from 'react';

import { todoReducer, initialState } from "../reducers/todoReducer";

export const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state, dispatch);
    const [newTaskName, setNewTaskName] = useState('');

  const handleChanges = e => {
    setNewTaskName(e.target.value);
  };

    return (
        <section>
            <h1> To-Do List</h1>
            <div>
                <input
                    className="task-input"
                    type="text"
                    name="newTaskName"
                    value={newTaskName}
                    onChange={handleChanges} 
                />
                <button 
                onClick={() => {
                    dispatch({ type: 'ADD_TASK', payload: newTaskName });
                }}
                > Add task
                //I dont know, i quit, i dont have time for this.
                </button>
            </div>
            <div>
                {!state.completed ? (
                    <div onClick={() => dispatch({ type: "TOGGLE_COMPLETED" })}
                    className="ToggleIncomplete">
                        {state.tasks.item}
                    </div>
                ) : (
                    <div onClick={() => dispatch({ type: "TOGGLE_COMPLETED" })}
                    className="ToggleComplete">
                        {state.tasks.item}
                    </div>
                    )}
            </div>
            <div>
            <button 
                onClick={() => {
                    dispatch({ type: 'REMOVE_COMPLETED'});
                }}
                > Clear Finished
                </button>
            </div>
        </section>
    )
}