import React, {useState} from 'react';
import {Box, Table, Tbody, Th, Thead, Tr} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import TableBody from "./TableBody/TableBody";
import Pagination from "./Pagination/Pagination";

const TableTransactions = () => {
    const {transactions} = useSelector((state: RootState) => state.transactionsPage)
    return (
        <Box>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Status</Th>
                        <Th>Type</Th>
                        <Th>Client Name</Th>
                        <Th>Amount</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {transactions?.map(transaction => <TableBody key={transaction.TransactionId}
                                                                 transaction={transaction}/>)}
                </Tbody>
            </Table>
            <Pagination/>
        </Box>
    );
};

export default TableTransactions;