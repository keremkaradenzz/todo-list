import ActionTypes from "../actionTypes"

const fetchTodo = () => ({
    type: ActionTypes.todo.FETCH_TODO
});
const addTodo = todos => ({
    type: ActionTypes.todo.ADD_TODO,
    payload: { todos }
});

const editTodo = (id,todos) => ({
    type: ActionTypes.todo.EDIT_TODO,
    payload: { id,todos }
});
const deleteTodo = id => ({
    type: ActionTypes.todo.DELETE_TODO,
    payload: { id }
});


const toDoActions = {
    fetchTodo,
    addTodo,
    editTodo,
    deleteTodo,
}

export default toDoActions;