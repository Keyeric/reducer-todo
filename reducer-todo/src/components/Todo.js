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
                </button>
            </div>

            <div>
                {state.tasks.map(item => {
                    console.log(item)
                    return <div className = {item.completed ? "ToggleComplete" : "ToggleIncomplete" } 
                    key = {item.id}
                        onClick={() => {
                            dispatch({ type: 'TOGGLE_COMPLETED', payload: item});
                        }}>{item.item}
                    </div>
                    }
                )}
            </div>

            <div>
                <button 
                    onClick={() => {
                        dispatch({ type: 'REMOVE_COMPLETED'});
                    }}
                    > 
                    Clear Finished
                </button>
            </div>
        </section>
    )
}