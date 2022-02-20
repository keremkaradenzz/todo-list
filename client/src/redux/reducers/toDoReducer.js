import ActionTypes from "../actionTypes";

const initialState = {
    todos: [],
}

const toDoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.todo.FETCH_TODO_SUCCESS:
            console.log("reducer FETCH_TODO_SUCCESS", action.payload);
            return {
                ...state,
                todos: [...action.payload.todos]
            };
        case ActionTypes.todo.ADD_TODO_SUCCESS:
            console.log("reducer ADD_TODO_SUCCESS", action.payload.todos);
            return {
                ...state,
                todos: [...initialState.todos, action.payload.todos]
            }
        case ActionTypes.todo.EDIT_TODO_SUCCESS:
            const newTodos = state.todos.map(item =>
                item._id === action.payload.id ? action.payload.todos : item
            );
            console.log("reducer EDIT_TODO_SUCCESS", newTodos);
            return {
                ...state,
                todos: [...newTodos],
            };
        case ActionTypes.todo.DELETE_TODO_SUCCESS:
            console.log("reducer DELETE_TODO_SUCCESS", action.payload.id);
            const newTodo = state.todos.filter(todo => todo._id !== action.payload.id);
            return {
                ...state,
                todos: [...newTodo]
            };
        default:
            return state;
    }
}

export default toDoReducer;