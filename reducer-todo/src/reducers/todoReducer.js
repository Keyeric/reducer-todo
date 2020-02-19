export const initialState = {
    tasks:[
        {
            item: "Learn about reducers",
            completed: false,
            id:62654986
        },
    ]
}

export const todoReducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TASK":
            const newTask = {item: action.payload, completed: false, id: Date.now()}
            return{...state, 
                tasks: [...state.tasks, newTask ]}
            case "TOGGLE_COMPLETED":
            return{...state,
                tasks: state.tasks.map(item => {
                    if (item.id === action.payload.id){
                        return{...item, 
                            completed: !item.completed} 
                    } else {
                        return item
                    }
                })
            }
            case "REMOVE_COMPLETED":
                return {
                    ...state, 
                    tasks: state.tasks.filter((task)=>
                        {
                            return !task.completed;
                        })
                }
        default:
            return state;
    }
}