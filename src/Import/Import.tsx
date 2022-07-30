import React, {useState} from 'react';
import {Button, Input} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {setTransactions} from "../store/reducers/transactionsReducer";
import {RootState} from "../store/reducers";

const Import = () => {
    const dispatch = useDispatch()
    const {transactions} = useSelector((state: RootState) => state.transactionsPage)
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);

    const fileReader = new FileReader();

    const csvFileToArray = (string: string) => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        const array: any[] = csvRows.map(i => {
            const values = i.split(",");
            const obj = csvHeader.reduce((object: any, header, index) => {
                object[header] = values[index];
                return object;
            }, {});
            return obj;
        });
        dispatch(setTransactions({items:array, count: array.length}))
    };
    const handleOnChange = (e: any) => {
        setFile(e.target.files[0]);
    };

    const handleOnSubmit = (e: any) => {
        e.preventDefault();

        if (file) {
            fileReader.onload = function (event: any) {
                const text = event.target.result;
                csvFileToArray(text);
            };

            fileReader.readAsText(file);
        }
    };
    return (
        <>
            <Input
                type={"file"}
                id={"csvFileInput"}
                accept={".csv"}
                onChange={event => handleOnChange(event)}
            />
            <Button onClick={handleOnSubmit}>Import</Button>
        </>
    );
};

export default Import;