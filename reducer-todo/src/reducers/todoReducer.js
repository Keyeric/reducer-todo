export const initialState = {
    tasks:[
        {
            item: "Learn about reducers",
            completed: false,
            id:62654986
        }
    ]
}

export const todoReducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TASK":
            const newTask = {}
            return{
                ...state,
                tasks: [...state.tasks, newTask]
            }
            case "TOGGLE_COMPLETED":
            return{
                ...state,
                completed: !state.completed
            }
            case "REMOVE_COMPLETED":
                return {
                    ...state.filter((task)=>
                        {
                            return !task.completed;
                        })
                }
        default:
            return state;
    }
}