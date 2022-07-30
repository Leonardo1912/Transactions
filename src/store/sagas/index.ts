import {all} from 'redux-saga/effects'
import {transactionsWatcher} from "./transactionsSagas";

export function* rootWatcher () {
    yield all([transactionsWatcher()])
}