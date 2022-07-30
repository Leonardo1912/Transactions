export interface TransactionsState {
    transactions: any[]
    isLoading: boolean
    page: number
    count: number
}

export enum TransactionsActionTypes {
    FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS',
    SET_TRANSACTIONS = 'SET_TRANSACTIONS',
    IS_LOADING = 'IS_LOADING',
    FETCH_UPDATE_TRANSACTION = 'FETCH_UPDATE_TRANSACTION',
    UPDATE_TRANSACTION = 'UPDATE_TRANSACTION',
    FETCH_DELETE_TRANSACTION = 'FETCH_DELETE_TRANSACTION',
    DELETE_TRANSACTION = 'DELETE_TRANSACTION',
    FETCH_TRANSACTIONS_FILTER = 'FETCH_TRANSACTIONS_FILTER',
    SEARCH_TRANSACTIONS = 'SEARCH_TRANSACTIONS',

}

interface FetchTransactions {
    type: TransactionsActionTypes.FETCH_TRANSACTIONS
}

interface IsLoading {
    type: TransactionsActionTypes.IS_LOADING
    payload: boolean
}

interface SetTransactions {
    type: TransactionsActionTypes.SET_TRANSACTIONS
    payload: { items: any[], count: number }
}

interface FetchUpdateTransaction {
    type: TransactionsActionTypes.FETCH_UPDATE_TRANSACTION
}

interface UpdateTransaction {
    type: TransactionsActionTypes.UPDATE_TRANSACTION
    payload: { TransactionId: number }
}

interface FetchDeleteTransaction {
    type: TransactionsActionTypes.FETCH_DELETE_TRANSACTION
}

interface DeleteTransaction {
    type: TransactionsActionTypes.DELETE_TRANSACTION
    payload: number
}

interface FetchTransactionsFilter {
    type: TransactionsActionTypes.FETCH_TRANSACTIONS_FILTER
}

interface SearchTransactions {
    type: TransactionsActionTypes.SEARCH_TRANSACTIONS
}

export type TransactionsAction =
    FetchTransactions
    | IsLoading
    | SetTransactions
    | FetchUpdateTransaction
    | UpdateTransaction
    | FetchDeleteTransaction
    | DeleteTransaction
    | FetchTransactionsFilter
    | SearchTransactions