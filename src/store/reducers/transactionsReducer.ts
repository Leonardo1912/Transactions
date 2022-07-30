import {TransactionsAction, TransactionsActionTypes, TransactionsState} from "../../types/transactionsType";

const initialState: TransactionsState = {
    transactions: [],
    isLoading: false,
    page: 1,
    count: 0
}

const transactionsReducer = (state = initialState, action: TransactionsAction): TransactionsState => {
    switch (action.type) {
        case TransactionsActionTypes.SET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload.items,
                count: action.payload.count
            }
        case TransactionsActionTypes.IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case TransactionsActionTypes.UPDATE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.map(item => item.TransactionId === action.payload.TransactionId ? action.payload : item)
            }
        case TransactionsActionTypes.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(item => item.TransactionId !== action.payload)
            }

        default:
            return state;

    }
};

export const toggleLoading = (payload: boolean) => ({type: TransactionsActionTypes.IS_LOADING, payload})
export const setTransactions = (payload: {}) => {
    debugger
    return ({type: TransactionsActionTypes.SET_TRANSACTIONS, payload})
}
export const updateTransaction = (payload: object) => ({type: TransactionsActionTypes.UPDATE_TRANSACTION, payload})
export const deleteTransaction = (payload: number) => ({type: TransactionsActionTypes.DELETE_TRANSACTION, payload})

export default transactionsReducer