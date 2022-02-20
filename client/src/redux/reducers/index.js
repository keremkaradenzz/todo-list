import toDoReducer from './toDoReducer';
import { combineReducers } from 'redux';


const reducers = combineReducers(
    {
        todos:toDoReducer,
    }
)

export default reducers;