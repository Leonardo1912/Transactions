import React, {useState} from 'react';
import {Button, Td, Tr} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import ModalEditTransaction from "../../../ modal/ModalEditTransaction";
import {TransactionsActionTypes} from "../../../types/transactionsType";
import {RootState} from "../../../store/reducers";

interface TableBodyProps {
    transaction: {
        TransactionId: number
        Status: string
        Type: string
        ClientName: string
        Amount: string
    }
}

const TableBody = ({transaction}: TableBodyProps) => {
    const dispatch = useDispatch();
    const [activeEdit, setActiveEdit] = useState(false)
    const {page} = useSelector((state:RootState)=> state.transactionsPage)

    const body = {
        TransactionId: transaction.TransactionId,
        Status: transaction.Status,
        Type: transaction.Type,
        ClientName: transaction.ClientName,
        Amount: transaction.Amount
    }
    return (
        <Tr>
            <Td>{transaction.TransactionId}</Td>
            <Td>{transaction.Status}</Td>
            <Td>{transaction.Type}</Td>
            <Td>{transaction.ClientName}</Td>
            <Td>{transaction.Amount}</Td>
            <Td>
                <Button onClick={() => setActiveEdit(true)}>Edit</Button>
                <Button onClick={() => dispatch({
                    type: TransactionsActionTypes.FETCH_DELETE_TRANSACTION,
                    id: transaction.TransactionId,
                    page: page
                })}>Delete</Button>
            </Td>
            <ModalEditTransaction active={activeEdit} setActive={setActiveEdit} transaction={body}/>
        </Tr>
    );
};

export default TableBody;