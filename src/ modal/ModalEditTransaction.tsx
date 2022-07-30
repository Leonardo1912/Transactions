import React from 'react';
import {Box, Button, Flex, Input} from "@chakra-ui/react";
import {Resolver, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {TransactionsActionTypes} from "../types/transactionsType";
import {RootState} from "../store/reducers";

interface ModalEditTransactionProps {
    active: boolean
    setActive: Function
    transaction: { TransactionId: number | string }
}

const ModalEditTransaction = ({active, setActive, transaction}: ModalEditTransactionProps) => {

    const dispatch = useDispatch()
    const {page} = useSelector((state:RootState)=> state.transactionsPage)
    type FormValues = {
        Status: string;
        Type: string;
        ClientName: string;
        Amount: string;
    };

    const {
        register,
        formState: {},
        handleSubmit
    } = useForm<FormValues>()


    const onSubmit = (data: object) => {
        dispatch({
            type: TransactionsActionTypes.FETCH_UPDATE_TRANSACTION,
            data: {...data, TransactionId: transaction.TransactionId},
            page: page
        })
    }

    return (
        <Flex display={active ? "flex" : "none"} w={"100vw"} h={"100vh"} background={'rgba(0,0,0,0.6)'}
              position={"fixed"} left={"0"} top={"0"}
              justifyContent={"center"} alignItems={"center"} onClick={() => setActive(false)}>
            <Box background={"white"} w={"400px"} onClick={event => event.stopPropagation()} p={"20px"}
                 borderRadius={"20px"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Status
                        <Input {...register("Status")}/>
                    </label>
                    <label>
                        Type
                        <Input {...register("Type")}/>
                    </label>
                    <label>
                        Client Name
                        <Input {...register("ClientName")}/>
                    </label>
                    <label>
                        Amount
                        <Input {...register("Amount")}/>
                    </label>
                    <Input type={"submit"}/>
                </form>
            </Box>
        </Flex>
    );
};

export default ModalEditTransaction;