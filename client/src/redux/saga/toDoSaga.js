import * as api from "../../api/index";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import ActionTypes from "../actionTypes";

function* fetchTodo() {
    const todos = yield call(async () => {
        const response = await api.fetchTodo();
        return response.data;
    }

    );
    console.log("saga FETCH_LISTS_SUCCESS", todos);
    yield put({ type: ActionTypes.todo.FETCH_TODO_SUCCESS, payload: { todos } });
}


function* addList({ payload }) {
    const todos = yield call(async () => {
        const response = await api.createTodo(payload.todos);
        return response;
    }

    );
    console.log("saga ADD_LIST_SUCCESS", { todos });
    yield put({ type: ActionTypes.todo.ADD_TODO_SUCCESS, payload: { todos } });
}


function* deleteTodo({ payload }) {
    const id = payload.id;
    yield call(async () => {
        const response = await api.deleteTodo(id);
        return response;
    }
    );
    yield put({ type: ActionTypes.todo.DELETE_TODO_SUCCESS, payload: { id } });
}

function* editTodo({ payload }) {
    const id = payload.id;
    const todos = yield call(async () => {
        const response = await api.updateTodo(id, payload.todos)
        return response.data
    }
    );
    console.log("saga EDIT_LIST_SUCCESS", { todos });
    yield put({ type: ActionTypes.todo.EDIT_TODO_SUCCESS, payload: { todos } });
}



function* watchFetchlists() {
    yield takeEvery(ActionTypes.todo.FETCH_TODO, fetchTodo);
}
function* watchAddTodo() {
    yield takeEvery(ActionTypes.todo.ADD_TODO, addList);
}
function* watchEditTodo() {
    yield takeLatest(ActionTypes.todo.EDIT_TODO, editTodo);
}
function* watchDeleteTodo() {
    yield takeLatest(ActionTypes.todo.DELETE_TODO, deleteTodo);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    watchFetchlists(),
    watchAddTodo(),
    watchEditTodo(),
    watchDeleteTodo()
];


