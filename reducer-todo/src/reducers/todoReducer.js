export const initialState = {
    item: "Learn about reducers",
    completed: false,
    id:62654986
}

export const todoReducer = (state, action) => {
    console.log(action);
    switch(action.type){
        default:
            return state;
    }
}