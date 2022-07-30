import React from 'react';
import {Button} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import {CSVLink} from "react-csv";

const Export = () => {
    const {transactions} = useSelector((state: RootState) => state.transactionsPage)
    const headers = [
        {label: "TransactionId", key: "TransactionId"},
        {label: "Status", key: "Status"},
        {label: "Type", key: "Type"},
        {label: "ClientName", key: "ClientName"},
        {label: "Amount", key: "Amount"}
    ];

    const csvReport = {
        data: transactions,
        headers: headers,
        filename: 'Transactions.csv'
    };
    return (
        <CSVLink {...csvReport}>
            <Button>Export</Button>
        </CSVLink>

    );
};

export default Export;