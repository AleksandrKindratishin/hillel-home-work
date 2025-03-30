import { all } from "redux-saga/effects";
import { watchTodos } from "./sagas/todoSaga";

export default function* rootSaga() {
    yield all([watchTodos()]);
}
