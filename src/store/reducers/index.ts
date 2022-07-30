import {combineReducers} from "redux";
import TransactionsReducer from "./transactionsReducer";

export const rootReducer = combineReducers({
    transactionsPage : TransactionsReducer
})

export type RootState = ReturnType<typeof rootReducer>