import { all } from "redux-saga/effects";
import todosagas from './toDoSaga';


function* rootSaga() {
  yield all([...todosagas]);
}

export default rootSaga;