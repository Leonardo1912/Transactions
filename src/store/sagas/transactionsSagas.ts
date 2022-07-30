import {put, takeEvery} from 'redux-saga/effects';
import {
    deleteTransactionAPI,
    getTransactionsAPI,
    getTransactionsFilterAPI,
    searchTransactionsAPI,
    updateTransactionAPI
} from '../../api/api';
import {TransactionsActionTypes} from "../../types/transactionsType";
import {AxiosResponse} from "axios";
import {
    deleteTransaction,
    setTransactions,
    updateTransaction
} from "../reducers/transactionsReducer";

function* transactionsWorker({page} : {type: string, page: number}) {
    const transactions: AxiosResponse = yield getTransactionsAPI(page);
    yield put(setTransactions(transactions.data));
}
function* transactionsFilterWorker({filter} : {type: string, filter: string}) {
    const transactions: AxiosResponse = yield getTransactionsFilterAPI(filter);
    yield put(setTransactions(transactions.data));
}
function* transactionsSearchWorker({search} : {type: string, search: string}) {
    const transactions: AxiosResponse = yield searchTransactionsAPI(search);
    yield put(setTransactions(transactions.data));
}

function* updateTransactionWorker({data, page}: { type: string, data: { TransactionId: number }, page: number }) {
    yield updateTransactionAPI(data.TransactionId, data);
    const transactions: AxiosResponse = yield getTransactionsAPI(page);
    yield put(setTransactions(transactions.data));
    /*yield put(updateTransaction(data));*/
}

function* deleteTransactionWorker({id, page}: { type: string, id: number, page: number }) {
    yield deleteTransactionAPI(id);
    const transactions: AxiosResponse = yield getTransactionsAPI(page);
    yield put(setTransactions(transactions.data));
    /*yield put(deleteTransaction(action.id));*/
}


export function* transactionsWatcher() {
    yield takeEvery(TransactionsActionTypes.FETCH_TRANSACTIONS, transactionsWorker);
    yield takeEvery(TransactionsActionTypes.FETCH_TRANSACTIONS_FILTER, transactionsFilterWorker);
    yield takeEvery(TransactionsActionTypes.SEARCH_TRANSACTIONS, transactionsSearchWorker);
    yield takeEvery(TransactionsActionTypes.FETCH_UPDATE_TRANSACTION, updateTransactionWorker);
    yield takeEvery(TransactionsActionTypes.FETCH_DELETE_TRANSACTION, deleteTransactionWorker);
}

